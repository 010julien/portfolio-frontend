import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Développeur Web",
      description:
        "Passionné par la création d'applications web modernes et performantes",
      color: "wax-blue",
    },
    {
      icon: Users,
      title: "Manager de Projet",
      description:
        "Expérience en gestion d'équipes pluridisciplinaires et coordination de projets",
      color: "wax-green",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Toujours à la recherche de solutions créatives et innovantes",
      color: "wax-yellow",
    },
    {
      icon: Target,
      title: "Vision Stratégique",
      description: "Capacité à aligner technologie et objectifs business",
      color: "wax-red",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-gray-900"
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
            À propos de{" "}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              moi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="wax-border pl-6 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Un double profil unique
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Étudiant en{" "}
                <span className="font-semibold text-wax-orange dark:text-wax-yellow">
                  Transformation digitale
                </span>
                , je combine expertise technique en développement web et
                compétences managériales pour créer des solutions digitales qui
                répondent aux besoins réels des utilisateurs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Mon parcours m'a permis de développer une vision à 360° des
                projets digitaux, de la conception technique à la coordination
                d'équipe, en passant par la planification stratégique et la
                communication avec les parties prenantes.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionné par l'innovation et les technologies émergentes, je
                suis constamment à la recherche de nouvelles façons d'améliorer
                l'expérience utilisateur et d'optimiser les processus de
                développement.
              </p>
            </div>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <div
                    className={`w-12 h-12 bg-${item.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-wax-yellow/10 via-wax-orange/10 to-wax-red/10 dark:from-wax-yellow/5 dark:via-wax-orange/5 dark:to-wax-red/5 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-wax-yellow to-wax-orange bg-clip-text text-transparent mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Projets réalisés
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-wax-orange to-wax-red bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Technologies maîtrisées
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-wax-red to-wax-purple bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Passion & Engagement
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
