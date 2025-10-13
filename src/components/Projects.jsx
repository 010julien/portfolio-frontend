import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsApi } from "../lib/api";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch projects from API
  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectsApi.getAll().then((res) => res.data),
  });

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  // Loading state
  if (isLoading) {
    return (
      <section
        id="projects"
        className="section-padding bg-white dark:bg-gray-900"
        ref={ref}
      >
        <div className="container-custom flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Chargement des projets...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError || projects.length === 0) {
    return (
      <section
        id="projects"
        className="section-padding bg-white dark:bg-gray-900"
        ref={ref}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes{" "}
              <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
                Projets
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400">
              {isError
                ? "Erreur de chargement des projets"
                : "Aucun projet pour le moment"}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
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
            Mes{" "}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les projets sur lesquels j'ai travaillé et les solutions
            que j'ai créées
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 md:-translate-x-12 p-3 md:p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-wax-orange group-hover:text-wax-yellow transition-colors" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 md:translate-x-12 p-3 md:p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Projet suivant"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-wax-orange group-hover:text-wax-yellow transition-colors" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Icon/Visual Section */}
                  <div
                    className={`relative bg-gradient-to-br ${currentProject.color} flex items-center justify-center`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className={
                        currentProject.icon?.startsWith("http")
                          ? ""
                          : " text-9xl width-full height-full"
                      }
                    >
                      {currentProject.icon?.startsWith("http") ? (
                        <img
                          src={currentProject.icon}
                          alt={currentProject.title}
                          className="pl-4 h-[18rem] "
                        />
                      ) : (
                        currentProject.icon
                      )}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-8">
                    <div className="mb-4 relative flex items-center justify-between">
                      <h3
                        className={`text-3xl font-bold mb-3 bg-gradient-to-r ${currentProject.color} bg-clip-text `}
                      >
                        {currentProject.title}
                      </h3>

                      <div className=" top-4 left-4">
                        <span
                          className={`px-3 py-1 border backdrop-blur-sm bg-gradient-to-r ${currentProject.color} bg-clip-text text-sm font-semibold rounded-full`}
                        >
                          {currentProject.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {currentProject.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 text-wax-orange" />
                        <span>{currentProject.team}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 text-wax-blue" />
                        <span>{currentProject.duration}</span>
                      </div>
                      <div className="text-sm font-semibold text-wax-green dark:text-wax-yellow">
                        {currentProject.role}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentProject.color} dark:border-gray-600 border-2 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir le projet
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
                        <Github className="w-4 h-4" />
                        Code source
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-wax-yellow to-wax-orange"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-wax-orange/50"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Vous avez un projet en tête ?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-wax-yellow to-wax-orange text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Discutons-en ensemble
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
