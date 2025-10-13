import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { skillsApi } from "../lib/api";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fetch skills grouped by categories from API
  const {
    data: skillsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills-by-categories"],
    queryFn: () => skillsApi.getByCategories().then((res) => res.data),
  });

  // Transform API data to match component structure
  const skillCategories = skillsData
    ? Object.entries(skillsData).map(([title, skills]) => {
        const colorMap = {
          Frontend: "from-wax-blue to-wax-purple",
          Backend: "from-wax-green to-wax-blue",
          "Database & Other": "from-wax-orange to-wax-red",
          Management: "from-wax-yellow to-wax-orange",
          Cybersécurité: "from-wax-red to-wax-purple",
          Design: "from-wax-purple to-wax-blue",
        };
        return {
          title,
          color: colorMap[title] || "from-wax-blue to-wax-purple",
          skills: skills.map((s) => ({
            name: s.name,
            level: s.percentage,
            icon: s.icon,
            description: s.description,
          })),
        };
      })
    : [];

  // Loading state
  if (isLoading) {
    return (
      <section
        id="skills"
        className="section-padding bg-gray-50 dark:bg-gray-800"
        ref={ref}
      >
        <div className="container-custom flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Chargement des compétences...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError || skillCategories.length === 0) {
    return (
      <section
        id="skills"
        className="section-padding bg-gray-50 dark:bg-gray-800"
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
                Compétences
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400">
              {isError
                ? "Erreur de chargement des compétences"
                : "Aucune compétence pour le moment"}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
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
            Mes{" "}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un ensemble de compétences techniques et managériales pour mener à
            bien vos projets digitaux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-3 flex-1">
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 object-contain mt-1"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                              {skill.level}%
                            </span>
                          </div>
                          {skill.description && (
                            <p className="text-xs pt-2 pb-6 text-gray-500 dark:text-gray-400 mt-1">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Leadership",
              "Travail d'équipe",
              "Communication",
              "Résolution de problèmes",
              "Adaptabilité",
              "Créativité",
              "Esprit d'analyse",
              "Organisation",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-wax-yellow/20 to-wax-orange/20 dark:from-wax-yellow/10 dark:to-wax-orange/10 border border-wax-orange/30 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:scale-110 transition-transform duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
