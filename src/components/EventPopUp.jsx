import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";


const EventPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // ⏱ Show popup after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false); // hide popup
    onClose?.(); // notify parent if needed
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 relative overflow-hidden border-2 border-amber-200/50"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white/90 text-gray-600 hover:text-gray-900 p-2 rounded-full shadow-lg"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src="https://res.cloudinary.com/djkmvvviu/image/upload/v1772092617/blog4_qrk4u6.png"
                alt="Jazz Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🎷 Recent Event
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">Top 5 Skills Teens Need to Thrive in Today’s Fast-Changing World</h2>

              <p className="text-gray-600 mb-6">
                Today’s teenagers are growing up in a world that looks nothing like the one their parents knew – digitally connected, constantly stimulated and under new kinds of social pressure. Rather than comparing generations, the real question is how we equip young people with the tools they need now. 
              </p>

              <div className="space-y-3 mb-6 bg-amber-50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Calendar className="text-amber-600" />
                  <span>February,2026</span>
                </div>
                {/*<div className="flex items-center gap-2">
                  <MapPin className="text-amber-600" />
                  <span>Dynamics Advanced Training Centre</span>
                </div>*/}
              </div>

              <button
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-3 rounded-xl font-semibold"
              >
                <a href="https://www.raemini.com/post/5-skills-today-s-teens-need-to-thrive-we-chat-to-an-expert" target="_blank" rel="noopener noreferrer">Know More</a>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;
