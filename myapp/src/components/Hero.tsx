import React, { useState, useEffect } from "react";
import { ArrowDown, Star, Users, Award, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "Home1.jpg",
      alt: "Professional Basketball Training",
    },
    {
      src: "Home2.jpg",
      alt: "Life Coaching Session",
    },
    {
      src: "Home3.jpg",
      alt: "Mental Performance Training",
    },
    {
      src: "Home4.jpg",
      alt: "Championship Mindset Development",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50 pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-300"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-yellow-300"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-orange-300"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-amber-200"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid  lg:grid-cols-2 gap-12 items-center">
          {/* Right Content - Animated Image Carousel */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden -mb-20 md:-mb-0">
              <img src="https://res.cloudinary.com/dczt652u9/image/upload/v1771304527/Home2_kdih2v.jpg" alt="hero-image" />
            </div>
          </motion.div>
          {/* Left Content */}
          <motion.div
            className="space-y-8 order-1 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-stone-100/80 backdrop-blur-sm px-4 py-2 rounded-full text-[13px] md:text-sm font-medium text-amber-800 border border-amber-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Star className="w-4 h-4 fill-current" />
                <span>
                  Active Professional Athlete • Certified Life Coach • Elite
                  Mentor
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Mental Performance Coach
                <span className="text-gray-700 text-lg md:text-2xl italic block mt-2 font-medium">
                  {" "}
                  for Youth and Adults
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-700 mt-2">
                  Mentor for Young Leaders
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                As an active professional basketball player with 15+ years of
                international experience, I know firsthand that discipline,
                consistency, and the right reps build unshakeable confidence. I
                help ambitious individuals develop the mental toughness and
                winning strategies that create champions in sports and life.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                onClick={scrollToBooking}
                className="group bg-gradient-to-r from-amber-600 to-yellow-600 cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Connect Now</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToServices}
                className="border-2 cursor-pointer border-amber-400 text-amber-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-amber-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Lives Transformed</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-yellow-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">
                  Years Pro Basketball
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-orange-600 fill-current" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
