import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certifications";
import { X, ExternalLink, Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="section-padding bg-white dark:bg-[#0d1117]"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary dark:text-[#00f3ff]">#</span>{" "}
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-[#00f3ff] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Validation de mes acquis et expertises par des organismes reconnus.
          </p>
        </motion.div>

        {/* Cartes de certifications - masquées */}
        <div className="hidden">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-xl p-6 cursor-pointer hover:shadow-xl hover:border-primary dark:hover:border-[#00f3ff] transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 bg-white dark:bg-white rounded-lg p-3 flex items-center justify-center shadow-md">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-[#00f3ff] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                {cert.summary}
              </p>
              <div className="flex items-center text-primary dark:text-[#00f3ff] text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Voir les détails
              </div>
            </motion.div>
          ))}
        </div>

        {/* Galerie défilante des certificats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Mes Certificats en Image
          </h3>
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] p-8">
            <div className="flex gap-6 animate-scroll">
              {/* Double la liste pour un défilement infini */}
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.id}-${index}`}
                  className="flex-shrink-0 w-[400px] h-[280px] bg-white dark:bg-[#0d1117] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#30363d] group cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay avec info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-10 h-10 bg-white rounded-lg p-1 object-contain"
                        />
                        <div>
                          <p className="text-white font-bold text-sm line-clamp-2">
                            {cert.title}
                          </p>
                          <p className="text-gray-300 text-xs">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-[#0d1117] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-[#30363d]"
              >
                {/* Header */}
                <div className="relative h-32 bg-gradient-to-r from-primary/10 to-transparent dark:from-[#00f3ff]/10 dark:to-transparent flex items-center p-8">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/40 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <div className="flex items-center gap-6">
                    <div className="w-28 h-28 bg-white dark:bg-white rounded-xl p-4 shadow-lg flex-shrink-0">
                      <img
                        src={selectedCert.logo}
                        alt={selectedCert.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {selectedCert.title}
                      </h3>
                      <p className="text-primary dark:text-[#00f3ff] font-medium">
                        {selectedCert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary dark:text-[#00f3ff]" />
                      Compétences acquises
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.details.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-[#161b22] text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-[#30363d]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary dark:text-[#00f3ff]" />
                      Projets réalisés
                    </h4>
                    <div className="space-y-4">
                      {selectedCert.details.projects.map((project, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 dark:bg-[#161b22] p-4 rounded-lg border border-gray-200 dark:border-[#30363d]"
                        >
                          <h5 className="font-bold text-gray-900 dark:text-gray-200 mb-1">
                            {project.title}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Image Display */}
                  <div className="mt-8 border-t border-gray-100 dark:border-[#30363d] pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary dark:text-[#00f3ff]" />
                      Certificat
                    </h4>
                    <div className="w-full bg-gray-50 dark:bg-[#010409] border border-gray-200 dark:border-[#30363d] rounded-lg p-2 overflow-hidden">
                      <img
                        src={selectedCert.image}
                        alt={`Certificat ${selectedCert.title}`}
                        className="w-full h-auto object-contain max-h-[400px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
