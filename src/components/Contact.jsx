import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Empêcher la navigation par défaut pour afficher le message localement,
    // et envoyer le formulaire en arrière-plan via fetch vers FormSubmit.
    e.preventDefault();
    const form = e.target;
    const action = form.action;
    const formData = new FormData(form);

    fetch(action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => {
        // Échec silencieux (on peut ajouter un message d'erreur si souhaité)
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adoboejulien010@gmail.com",
      link: "mailto:adoboejulien010@gmail.com",
      color: "wax-red",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+228 70 146 180",
      link: "https://wa.me/+22870146180",
      color: "wax-green",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Lomé, Togo",
      link: null,
      color: "wax-orange",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ADOBOE Comlan Julien",
      link: "https://www.linkedin.com/in/julien-comlan-adoboe-76bb47396",
      color: "wax-blue",
    },
  ];

  return (
    <section
      id="contact"
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
            Contactez{" "}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              moi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un projet en tête ? Une collaboration à envisager ? N'hésitez pas à
            me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* === INFOS CONTACT === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Informations de contact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et
                collaborations. Développement web, gestion de projet ou simple
                échange tech → écrivez-moi !
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        <div
                          className={`w-12 h-12 bg-${info.color}/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`w-6 h-6 text-${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {info.title}
                          </div>
                          <div className="font-semibold text-gray-800 dark:text-white">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl">
                        <div
                          className={`w-12 h-12 bg-${info.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 text-${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {info.title}
                          </div>
                          <div className="font-semibold text-gray-800 dark:text-white">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* === RÉSEAUX SOCIAUX === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Retrouvez-moi sur
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/julien-comlan-adoboe-76bb47396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-wax-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/010julien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* === FORMULAIRE (avec FormSubmit) === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Envoyez-moi un message
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-wax-green/20 border border-wax-green/30 rounded-lg flex items-center gap-3 text-wax-green"
              >
                <CheckCircle className="w-5 h-5" />
                <span>
                  Message envoyé avec succès ! Je vous réponds très vite
                </span>
              </motion.div>
            )}

            <form
              action="https://formsubmit.co/5d92e351cf1739740da0c98b1631d52d "
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Anti-spam invisible */}
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              {/* Page de remerciement optionnelle */}
              <input
                type="hidden"
                name="_next"
                value="https://tonsite.com/merci"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none"
                  placeholder="Julien Dupont"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none"
                  placeholder="julien@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none"
                  placeholder="Projet web / Collaboration / Autre"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Bonjour Julien, j'aimerais discuter d'un projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-wax-yellow to-wax-orange text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
