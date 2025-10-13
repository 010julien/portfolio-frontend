import { motion } from "framer-motion";
import { Heart, Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent mb-4">
              J
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Développeur & Manager digital passionné par la création de
              solutions digitales innovantes.
            </p>
            <div className="wax-border pl-4">
              <p className="text-sm italic text-gray-500">
                "Entre technologie et vision stratégique"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                "Accueil",
                "À propos",
                "Compétences",
                "Projets",
                "Management",
                "Expériences",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "")}`}
                    className="text-gray-400 hover:text-wax-yellow transition-colors duration-200 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:julien.adoboe@example.com"
                className="flex items-center gap-3 text-gray-400 hover:text-wax-yellow transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>adoboejulien010@gmail.com</span>
              </a>
              <a
                href="https://wa.me/+22870146180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-wax-yellow transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+228 70 14 61 80</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-wax-blue transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/adoboejulien010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} ADOBOE Comlan Julien. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Le Travail <Heart className="w-4 h-4 text-wax-red fill-current" />{" "}
              Libère l'homme.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
