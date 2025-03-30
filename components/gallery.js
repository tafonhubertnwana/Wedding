"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const WeddingGallery = () => {
  const categories = ['ALL MOMENTS', 'FRIENDS', 'BANQUET', 'FAMILY', 'PARTY'];
  const [activeCategory, setActiveCategory] = useState('ALL MOMENTS');
  
  // Sample wedding images data
  const images = [
    { id: 1, src: '/images/background.jpg', category: 'FRIENDS', title: 'Bridesmaids celebration' },
    { id: 2, src: '/wedding-2.jpg', category: 'BANQUET', title: 'Wedding dinner' },
    { id: 3, src: '/wedding-3.jpg', category: 'FAMILY', title: 'Family portrait' },
    { id: 4, src: '/wedding-4.jpg', category: 'PARTY', title: 'Dance floor' },
    { id: 5, src: '/wedding-5.jpg', category: 'FRIENDS', title: 'Groomsmen toast' },
    { id: 6, src: '/wedding-6.jpg', category: 'BANQUET', title: 'Cake cutting' },
    { id: 7, src: '/wedding-7.jpg', category: 'PARTY', title: 'Selling 7.jpg' },
    { id: 8, src: '/wedding-8.jpg', category: 'FAMILY', title: 'Parents dance' },
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'ALL MOMENTS' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Header */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Wedding gallery
      </motion.h1>
      
      {/* Description */}
      <motion.p 
        className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </motion.p>
      
      {/* Divider */}
      <motion.div 
        className="border-t border-gray-300 my-8 w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Categories */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-3 py-1 text-sm md:text-base transition-colors ${
              activeCategory === category 
                ? 'font-bold text-black border-b-2 border-black' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Divider */}
      <motion.div 
        className="border-t border-gray-300 my-8 w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      {/* Image Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            layout
          >
            <motion.img
              src={image.src}
              alt={image.title}
              className="w-full h-48 object-cover cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-4">
              <p className="font-medium text-center">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WeddingGallery;