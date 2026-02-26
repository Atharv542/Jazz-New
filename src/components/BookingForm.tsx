import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Clock, ArrowRight, X, Target, Trophy, Lightbulb } from "lucide-react";

const BookingForm = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section
      id="booking"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-stone-100  border-t border-amber-200"
    >
      {/* ✨ Background Glow Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-200/40 rounded-full blur-3xl opacity-50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* 🌟 Hero Heading */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          Step Into Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-600">
            Champion Era
          </span>
        </h2>

        {/* 💬 Subheading */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
          Discover how elite performers build unstoppable confidence, mental
          strength, and resilience. Your transformation starts with a single
          conversation — your <strong>free discovery call</strong>.
        </p>

        {/* 🛤️ 3-Step Animated Timeline */}
        <motion.div
        
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16"
        >
          {[
            {
              icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
              title: "Gain Clarity",
              desc: "We'll uncover your goals, challenges, and blind spots.",
            },
            {
              icon: <Target className="w-8 h-8 text-amber-600" />,
              title: "Create Your Plan",
              desc: "Together, we’ll design a winning mindset strategy.",
            },
            {
              icon: <Trophy className="w-8 h-8 text-amber-600" />,
              title: "Achieve Victory",
              desc: "Walk away with clarity, focus, and unstoppable drive.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-amber-100 transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🪄 Book Button */}
        {!showCalendly && (
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowCalendly(true)}
            className="inline-flex cursor-pointer items-center space-x-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-5 py-2 md:px-10 md:py-5 rounded-xl md:rounded-full font-semibold text-md md:text-xl shadow-lg transition-all duration-300"
          >
            <Calendar className="w-6 h-6" />
            <span>Book Your Free Discovery Call</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        )}

        {/* 🗓️ Calendly Popup */}
        {showCalendly && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 bg-white/80 backdrop-blur-lg rounded-2xl border border-amber-200 shadow-2xl relative max-w-5xl mx-auto p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-7 h-7" />
            </button>

            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-2">
              <Clock className="w-7 h-7 text-amber-700" />
              Schedule Your Call
            </h3>

            <div className="flex justify-center">
              <iframe
                src="https://calendly.com/repswithjazz/30min"
                width="100%"
                height="650"
                className="border-0 rounded-xl shadow-md"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Choose a time that fits your schedule — confirmation will be sent
              to your email instantly.
            </p>
          </motion.div>
        )}

        {/* ⚡ Bottom Animated Timeline Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-28 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
