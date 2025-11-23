import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Point ball
import Activit1 from "../images/Activite1.jpg";
import Activit2 from "../images/Julien.jpg";
// Autre activités images à importer ici

const Activite = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  const activities = [
    {
      title: "Paintball en équipe",
      description:
        "Qui sera le dernier debout ? clairement pas moi à la fin 😂 Moi C'est PC/CODE{}/COFFE 😂",
      color: "blue-500",
      achievements: [
        "Coordination d'équipes de 5 à 10 joueurs",
        "Planification de stratégies de jeu efficaces",
        "Gestion du matériel et de la logistique",
      ],
      images: [Activit1, Activit2],
    },
    // ... autres activités
  ];

  const visibleActivity = showMore ? activities : activities.slice(0, 4);

  return (
    <section
      id="management"
      className="section-padding bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes Activités{" "}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              Loisire & Joie
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Organisation d’une activité team-building ludique et stratégique
            pour renforcer la cohésion, la communication et la motivation d’une
            équipe pluridisciplinaire.
          </p>
        </motion.div>

        {/* Main Experience Highlight */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-wax-yellow/10 via-wax-orange/10 to-wax-red/10 dark:from-wax-yellow/5 dark:via-wax-orange/5 dark:to-wax-red/5 rounded-2xl p-8 md:p-12 mb-16 border-l-4 border-wax-orange"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-wax-orange/20 text-wax-orange dark:text-wax-yellow rounded-full text-sm font-semibold mb-4">
                {experience.period}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                {experience.role}
              </h3>
              <p className="text-xl text-wax-orange dark:text-wax-yellow font-semibold mb-4">
                {experience.company} - {experience.project}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {experience.description}
              </p>
            </div>
            <div className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-wax-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Management Skills Grid */}

        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-6">
          {visibleActivity.map((Activity, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Slider d'images automatique */}
                <div className="relative w-full h-[28rem] mb-6 overflow-hidden rounded-lg">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 3000, // Change toutes les 3 secondes
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true, // Pause au survol (bon UX)
                    }}
                    pagination={{ clickable: true }}
                    className="h-full"
                  >
                    {Activity.images.map(
                      (
                        imgSrc,
                        imgIndex // ← images au pluriel !
                      ) => (
                        <SwiperSlide key={imgIndex}>
                          <img
                            src={imgSrc}
                            alt={`${Activity.title} - photo ${imgIndex + 1}`}
                            className="w-full h-full object-cover object-center"
                          />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>

                  {/* Optionnel : overlay sympa au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                </div>

                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {Activity.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {Activity.description}
                </p>

                <div className="space-y-2">
                  {Activity.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-${Activity.color} rounded-full`}
                      />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Boutton voir plus  */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            {showMore ? "Voir moins" : "Voir plus"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activite;
