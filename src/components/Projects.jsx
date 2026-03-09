import { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  ExternalLink,
  Github,
} from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use static projects data
  const isLoading = false;
  const isError = false;

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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Card with Image Background */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Full Background Image */}
                  <div className="relative h-[500px] md:h-[600px]">
                    {currentProject.image?.startsWith("http") ||
                    currentProject.image?.startsWith("/") ? (
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${currentProject.color} flex items-center justify-center text-9xl`}
                      >
                        {currentProject.image}
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-6 right-6">
                      <span
                        className={`px-4 py-2 bg-gradient-to-r ${currentProject.color} text-white text-sm font-bold rounded-full shadow-lg`}
                      >
                        {currentProject.category}
                      </span>
                    </div>

                    {/* Project Number - Top Left */}
                    <div className="absolute top-6 left-6">
                      <span className="text-white/30 text-8xl font-black">
                        0{currentIndex + 1}
                      </span>
                    </div>

                    {/* Content Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Title */}
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                          {currentProject.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-200 text-lg mb-6 max-w-3xl leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* Project Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 mb-6">
                          <div className="flex items-center gap-2 text-white/80">
                            <Users className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">
                              {currentProject.team}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Calendar className="w-5 h-5 text-yellow-400" />
                            <span className="font-medium">
                              {currentProject.duration}
                            </span>
                          </div>
                          <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                            <span className="text-emerald-400 font-semibold">
                              {currentProject.role}
                            </span>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {currentProject.technologies.map(
                            (tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm font-medium text-white hover:bg-white/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                          <a
                            href={currentProject.link}
                            className={`group flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${currentProject.color} text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                          >
                            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Voir le projet
                          </a>
                          <a
                            href={currentProject.github}
                            className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-300"
                          >
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Code source
                          </a>
                        </div>
                      </motion.div>
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
