import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ActivityModal from "./ActivityModal";

import Activit1 from "../images/Activite1.jpg";
import Activit2 from "../images/Julien.jpg";

const Activite = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      id: "act-001",
      commit: "a1b2c3d",
      message: "feat: Paintball Team Building",
      date: "2023-11-15",
      author: "Julien Adoboe",
      tags: ["Strategy", "Teamwork", "Adrenaline"],
      description:
        "Organisation d'une session de paintball pour renforcer la cohésion d'équipe. Une expérience intense qui a permis de travailler la communication sous pression.",
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      details: {
        players: 10,
        location: "Lomé Paintball Club",
        outcome: "Victory for the Dev Team 🏆",
      },
      images: [Activit1, Activit2],
    },
    {
      id: "act-002",
      commit: "e5f6g7h",
      message: "chore: Tech Watch & Coffee",
      date: "2024-01-10",
      author: "Julien Adoboe",
      tags: ["Coffee", "Learning", "Innovation"],
      description:
        "Session de veille technologique hebdomadaire accompagnée d'un bon café. Exploration des dernières features de React 19 et discussion sur l'architecture Micro-Frontend.",
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      details: {
        topic: "React 19 & Server Components",
        coffee_consumed: "3 cups ☕",
        key_takeaway: "Performance boost expected",
      },
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <>
      <section
        id="activites"
        className="section-padding bg-white dark:bg-[#0d1117] text-gray-600 dark:text-gray-300 font-mono"
        ref={ref}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#00f3ff] uppercase bg-[#00f3ff]/10 rounded-full">
              git log --activities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              <span className="text-[#00f3ff]">$</span> Commit History
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
              Une trace de mes activités extra-professionnelles et moments de
              vie.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-[45%] lg:w-[48%] border border-gray-200 dark:border-[#30363d] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="p-6">
                  {/* Commit Header */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2 text-sm">
                    <span className="text-yellow-500 font-bold">
                      commit {activity.commit}
                    </span>
                    <span className="text-gray-600 dark:text-gray-500">
                      Author: {activity.author}
                    </span>
                    <span className="text-gray-600 dark:text-gray-500">
                      Date: {activity.date}
                    </span>
                  </div>

                  {/* Commit Message */}
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                    {activity.message}
                  </h3>

                  {/* Simplified Content Preview */}
                  <div className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg p-4 hover:border-[#00f3ff]/50 transition-colors">
                    {activity.images && activity.images.length > 0 && (
                      <div className="w-full h-[200px] overflow-hidden rounded border border-gray-200 dark:border-[#30363d] relative mb-4">
                        <img
                          src={activity.images[0]}
                          alt={activity.message}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}
                    <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm truncate">
                      {activity.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activity.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-cyan-100 text-cyan-800 border border-cyan-200 dark:bg-[#00f3ff]/10 dark:text-[#00f3ff] dark:border-[#00f3ff]/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </>
  );
};

export default Activite;
