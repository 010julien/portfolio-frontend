import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
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
      link: "https://linkedin.com",
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
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Informations de contact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités,
                collaborations et discussions autour des projets digitaux. Que
                ce soit pour un développement web, la gestion d'un projet ou
                simplement échanger sur les technologies, contactez-moi !
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
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

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Retrouvez-moi sur
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-wax-blue hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/010julien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
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
                <span>Message envoyé avec succès !</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none"
                  placeholder="Votre nom"
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
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none"
                  placeholder="votre.email@example.com"
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
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none"
                  placeholder="Sujet de votre message"
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
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wax-orange focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
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
