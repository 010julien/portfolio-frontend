import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "Transformation Digitale & Management de Projet",
      organization:
        "ESCEN (Ecole Supérieure de Commerce et d'Économie Numérique)",
      period: "2023 - Présent",
      description:
        "Formation approfondie en Transformation digitale & Management de Projet, combinant compétences techniques en développement et compétences managériales pour piloter des projets digitaux.",
      highlights: [
        "Développement web",
        "Gestion de projets digitaux",
        "Stratégie digitale",
        "Innovation et technologies émergentes",
      ],
      color: "wax-blue",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Chef de Projet - TogoSchool",
      organization: "SylvaTeam",
      period: "2025 - Présent",
      description:
        "Manager et Resposable de la techinique du projet TogoSchool, plateforme éducative innovante.",
      highlights: [
        "Management d'équipe (dev, designer, ingénieur)",
        "Planification et suivi agile",
        "Communication avec les stakeholders",
        "Développement et déploiement",
      ],
      color: "wax-orange",
    },
    {
      type: "project",
      icon: Code,
      title: "Développeur Full-Stack",
      organization: "E-commerce ELISCO Technova",
      period: "2024",
      description:
        "Développement d'une plateforme e-commerce complète pour artisans togolais avec système de paiement, gestion des stocks et interface moderne.",
      highlights: [
        "Développement front-end avec React",
        "Intégration paiement",
        "Interface responsive",
        "Gestion de base de données",
      ],
      color: "wax-green",
    },
    {
      type: "project",
      icon: Code,
      title: "Développeur & Concepteur",
      organization: "AutoWash Digital",
      period: "2025 - Présent",
      description:
        "Digitalisation complète d'un service de lavage automobile avec système de réservation, suivi des services et facturation automatisée.",
      highlights: [
        "Application React moderne",
        "Backend NestJS",
        "Base de données PostgreSQL",
        "Architecture scalable",
      ],
      color: "wax-red",
    },
    {
      type: "projet",
      icon: Award,
      title: " Responsable de la technique & et la série de développement",
      organization: "Agnigban Gnan",
      period: "2025 - Présent",
      description:
        "Apprentissage continu et montée en compétences sur diverses technologies et méthodologies.",
      highlights: [
        "React et écosystème moderne",
        "Méthodologies agiles",
        "Design patterns",
        "DevOps et CI/CD",
      ],
      color: "wax-purple",
    },
  ];

  const getIconColor = (color) => {
    const colors = {
      "wax-blue": "text-wax-blue",
      "wax-orange": "text-wax-orange",
      "wax-green": "text-wax-green",
      "wax-red": "text-wax-red",
      "wax-purple": "text-wax-purple",
    };
    return colors[color];
  };

  const getBgColor = (color) => {
    const colors = {
      "wax-blue": "bg-wax-blue/20",
      "wax-orange": "bg-wax-orange/20",
      "wax-green": "bg-wax-green/20",
      "wax-red": "bg-wax-red/20",
      "wax-purple": "bg-wax-purple/20",
    };
    return colors[color];
  };

  return (
    <section
      id="experience"
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
            Mon{" "}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              Parcours
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un parcours alliant formation académique, expérience professionnelle
            et projets concrets
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-wax-yellow via-wax-orange to-wax-red opacity-20"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEven ? -50 : 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven
                        ? "md:text-right md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-1 ${getBgColor(
                        item.color
                      )} ${getIconColor(
                        item.color
                      )} rounded-full text-sm font-semibold mb-3`}
                    >
                      {item.period}
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      {item.title}
                    </h3>

                    <p
                      className={`text-lg font-semibold mb-3 ${getIconColor(
                        item.color
                      )}`}
                    >
                      {item.organization}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div
                      className={`space-y-2 ${
                        isEven ? "md:flex md:flex-col md:items-end" : ""
                      }`}
                    >
                      {item.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 ${
                            isEven ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className={`w-2 h-2 ${getBgColor(
                              item.color
                            )} rounded-full`}
                          ></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 ${getBgColor(
                      item.color
                    )} w-16 h-16 rounded-full items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg`}
                  >
                    <Icon className={`w-8 h-8 ${getIconColor(item.color)}`} />
                  </div>

                  {/* Mobile Icon */}
                  <div
                    className={`md:hidden ${getBgColor(
                      item.color
                    )} w-12 h-12 rounded-full flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${getIconColor(item.color)}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "2+", label: "Années d'expérience", color: "wax-blue" },
            { number: "3+", label: "Projets réalisés", color: "wax-orange" },
            { number: "5+", label: "Membres d'équipe", color: "wax-green" },
            { number: "10+", label: "Technologies", color: "wax-red" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                className={`text-4xl font-bold ${getIconColor(
                  stat.color
                )} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
