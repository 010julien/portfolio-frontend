import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/gallery";

const GalleryPage = ({ darkMode, toggleDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);

  return (
    <div className="bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      {/* Header simplifié pour la page galerie */}
      <header className="fixed top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg">
        <nav className="container-custom mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-wax-orange dark:hover:text-wax-yellow transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Retour au Portfolio</span>
            </Link>
            <h1 className="text-xl font-bold text-black dark:text-white">
              Galerie
            </h1>
            <div className="w-[140px]"></div>{" "}
            {/* Spacer pour centrer le titre */}
          </div>
        </nav>
      </header>

      {/* Contenu de la galerie */}
      <main className="pt-24 pb-16 px-4">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              Ma Galerie
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
              Quelques moments et projets capturés en images.
            </p>
          </motion.div>

          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}
                onClick={() => setSelectedImage(image)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize className="text-white mb-2" size={32} />
                  <span className="text-white font-semibold">
                    {image.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-16 left-0 right-0 p-4 text-center">
                <h3 className="text-white font-bold text-lg">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
