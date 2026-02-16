import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { motion,Variants } from 'framer-motion';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const features = ['Transform Your Mindset', 'Athletic Excellence', 'Personal Growth'];

  // All images
  const allImages = [
    { id: 1, url: '/Group1.jpg', alt: 'Life coaching session', span: 'col-span-2 row-span-2' },
    { id: 2, url: '/P1.jpg', alt: 'Basketball training', span: 'col-span-1 row-span-1' },
    { id: 3, url: '/P3.jpg', alt: 'Personal development', span: 'col-span-1 row-span-1' },
    { id: 4, url: '/P16.jpg', alt: 'Athletic mindset', span: 'col-span-1 row-span-1' },
    { id: 5, url: '/P17.jpg', alt: 'Leadership coaching', span: 'col-span-1 row-span-1' },
    { id: 6, url: '/AboutJazz.jpg', alt: 'Home training setup', span: 'col-span-2 row-span-2' },
    { id: 7, url: '/Group7.png', alt: 'Home environment', span: 'col-span-2 row-span-2' },
    { id: 8, url: '/Group8.png', alt: 'Home coaching space', span: 'col-span-2 row-span-2' },
    { id: 9, url: '/Home4.jpg', alt: 'Alternative home view', span: 'col-span-1 row-span-2' },
    { id: 10, url: '/Home1.jpg', alt: 'About Jazz', span: 'col-span-1 row-span-2' },
    { id: 11, url: '/P18.jpg', alt: 'About Jazz', span: 'col-span-1 row-span-2' },
    { id: 12, url: '/P5.jpg', alt: 'About Jazz', span: 'col-span-1 row-span-2' },
    { id: 13, url: '/P8.jpg', alt: 'About Jazz', span: 'col-span-1 row-span-2' },
    { id: 14, url: '/P19.jpg', alt: 'About Jazz', span: 'col-span-1 row-span-2' },
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? allImages.length - 1 : selectedImage - 1);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Animation Variants
  const containerVariants :Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between each image
      },
    },
  };

  const itemVariants :Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <div
      ref={galleryRef}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 px-4 relative overflow-hidden border-t-1 border-amber-200"
    >
      {/* Feature badges */}
      <div
        className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-amber-100/90 to-orange-100/90 px-8 py-4 rounded-full font-bold text-sm border shadow-xl"
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'both',
            }}
          >
            <span className="text-orange-600 mr-2">●</span> {feature}
          </div>
        ))}
      </div>

      {/* Gallery with Animation */}
      <motion.div
        className="grid grid-cols-4 auto-rows-[200px] gap-6 mb-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {allImages.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className={`${image.span} group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg border`}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for image slider */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 z-10">
              <X className="w-6 h-6 text-white cursor-pointer" />
            </button>
            <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
              <ChevronLeft className="w-7 h-7 cursor-pointer text-white" />
            </button>
            <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
              <ChevronRight className="w-7 h-7 cursor-pointer text-white" />
            </button>

            <img
              src={allImages[selectedImage].url}
              alt={allImages[selectedImage].alt}
              className="w-full h-full max-h-[75vh] object-contain rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
