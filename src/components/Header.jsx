import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Image, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../images/Julien.jpg";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [skillsMenuOpen, setSkillsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Management", href: "#management" },
    { name: "Expériences", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed p-3 top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-wax-orange">
              <img src={Logo} alt="Logo" />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 2).map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Compétences Dropdown */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setSkillsMenuOpen(true)}
              onMouseLeave={() => setSkillsMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors duration-200">
                Compétences
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${skillsMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {skillsMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                >
                  <a
                    href="#skills"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
                  >
                    Compétences
                  </a>
                  <a
                    href="#certifications"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
                  >
                    Certifications
                  </a>
                </motion.div>
              )}
            </motion.div>

            {navItems.slice(2).map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Gallery Link */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="/gallery"
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-wax-yellow to-wax-orange text-white hover:opacity-90 transition-opacity"
              >
                <Image size={18} />
                <span>Galerie</span>
              </Link>
            </motion.div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-wax-yellow" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-wax-yellow" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Compétences Mobile Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setSkillsMenuOpen(!skillsMenuOpen)}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
              >
                Compétences
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${skillsMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {skillsMenuOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-wax-orange">
                  <a
                    href="#skills"
                    className="block text-gray-600 dark:text-gray-400 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Compétences
                  </a>
                  <a
                    href="#certifications"
                    className="block text-gray-600 dark:text-gray-400 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Certifications
                  </a>
                </div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/gallery"
              className="flex items-center gap-2 text-wax-orange dark:text-wax-yellow font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Image size={18} />
              <span>Galerie</span>
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
