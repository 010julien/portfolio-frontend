import { Link } from "react-router-dom";
import { Briefcase, Crown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const FloatingCareerButton = () => {
  const { language } = useLanguage();

  return (
    <Link to="/career">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 group"
        aria-label={
          language === "fr"
            ? "Voir mon parcours CTO & Stagiaire"
            : "View my CTO & Intern journey"
        }
        title={language === "fr" ? "CTO & Stagiaire" : "CTO & Intern"}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Briefcase className="w-6 h-6" />
            <Crown className="w-3 h-3 absolute -top-1 -right-1 text-yellow-200" />
          </div>
          <span className="font-bold text-sm hidden sm:inline">
            {language === "fr" ? "CTO" : "CTO"}
          </span>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {language === "fr"
            ? "Mon parcours : CTO & Stagiaire"
            : "My journey: CTO & Intern"}
        </div>

        {/* Pulse animation */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
        </span>
      </motion.button>
    </Link>
  );
};

export default FloatingCareerButton;
