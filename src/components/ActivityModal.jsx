import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";

const ActivityModal = ({ activity, onClose }) => {
  if (!activity) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-[#161b22] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 pr-8">
              {activity.message}
            </h3>

            <div className="flex flex-col gap-6">
              {activity.videoUrl && (
                <div className="w-full aspect-video overflow-hidden rounded border border-gray-200 dark:border-[#30363d] relative">
                  <ReactPlayer
                    url={activity.videoUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              )}

              {activity.images && activity.images.length > 0 && (
                <div className="w-full h-[300px] overflow-hidden rounded border border-gray-200 dark:border-[#30363d] relative">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                  >
                    {activity.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${activity.title || activity.message} ${i + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              <p className="text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>

              <div className="bg-gray-100 dark:bg-[#0d1117] p-4 rounded border border-gray-200 dark:border-[#30363d] text-xs md:text-sm overflow-x-auto">
                <code className="language-json">
                  <span className="text-purple-400">"details"</span>: {"{"}
                  {Object.entries(activity.details).map(([key, value], i) => (
                    <div key={key} className="pl-4">
                      <span className="text-blue-400">"{key}"</span>:{" "}
                      <span className="text-green-400">"{value}"</span>
                      {i < Object.keys(activity.details).length - 1 && ","}
                    </div>
                  ))}
                  {"}"}
                </code>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded bg-cyan-100 text-cyan-800 border border-cyan-200 dark:bg-[#00f3ff]/10 dark:text-[#00f3ff] dark:border-[#00f3ff]/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ActivityModal;
