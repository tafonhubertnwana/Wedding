"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const WeddingGallery = () => {
  const categories = ['ALL MOMENTS', 'FRIENDS', 'BANQUET', 'FAMILY', 'PARTY'];
  const [activeCategory, setActiveCategory] = useState('ALL MOMENTS');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, src: '/images/background.jpg', category: 'FRIENDS', aspect: 'wide' },
    { id: 2, src:'/images/background.jpg', category: 'BANQUET', aspect: 'tall' },
    { id: 3, src: '/images/background.jpg', category: 'FAMILY', aspect: 'square' },
    { id: 4, src: '/images/background.jpg', category: 'PARTY', aspect: 'wide' },
    { id: 5, src: '/images/background.jpg', category: 'FRIENDS', aspect: 'tall' },
    { id: 6, src: '/images/background.jpg', category: 'BANQUET', aspect: 'square' },
    { id: 7, src: '/images/background.jpg', category: 'PARTY', aspect: 'wide' },
    { id: 8, src: '/images/background.jpg', category: 'FAMILY', aspect: 'tall' },
    { id: 9, src: '/images/background.jpg', category: 'FRIENDS', aspect: 'square' },
    { id: 10, src: '/images/background.jpg', category: 'BANQUET', aspect: 'wide' },
    { id: 11, src: '/images/background.jpg', category: 'FAMILY', aspect: 'tall' },
    { id: 12, src: '/images/background.jpg', category: 'PARTY', aspect: 'square' },
  ];

  const filteredImages = activeCategory === 'ALL MOMENTS' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const getColSpan = (aspect) => {
    switch (aspect) {
      case 'wide': return 'md:col-span-2';
      case 'tall': return 'md:row-span-2';
      default: return '';
    }
  };

  const getImageHeight = (aspect) => {
    switch (aspect) {
      case 'wide': return 'h-48 sm:h-64';
      case 'tall': return 'h-64 sm:h-full';
      default: return 'h-48 sm:h-56';
    }
  };

  return (
    <section id='gallery' className="bg-gradient-to-b from-white to-gray-50">
      <div className="container xl:max-w-6xl mx-auto px-4 py-16 font-sans">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Wedding Gallery</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition-all ${
                activeCategory === category 
                  ? 'font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30' 
                  : 'text-gray-600 hover:text-amber-600 border border-gray-200 hover:border-amber-300 bg-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {filteredImages.map((image) => (
            <motion.div 
              key={image.id} 
              className={`overflow-hidden  shadow-md hover:shadow-xl transition-all ${getColSpan(image.aspect)}`}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.img
                src={image.src}
                alt="Gallery image"
                className={`w-full ${getImageHeight(image.aspect)} object-cover cursor-pointer`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative max-w-4xl w-full px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <motion.button 
                className="absolute -top-12 right-0 text-white text-3xl hover:text-amber-400"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </motion.button>
              <motion.img 
                src={selectedImage} 
                alt="Selected" 
                className="w-full h-auto max-h-[90vh] mx-auto rounded-lg shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WeddingGallery;