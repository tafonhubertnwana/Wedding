"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
    <section id='gallery' >

        <div className="container xl:max-w-6xl mx-auto px-4 py-12 font-sans">
          <motion.h1 className={`${allura.className} text-4xl font-bold text-center mb-6 custom-font`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Wedding gallery
          </motion.h1>
          
          <motion.div  className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-3 py-1 text-sm md:text-base transition-colors ${activeCategory === category ? 'font-bold text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {filteredImages.map((image) => (
              <motion.div key={image.id} className={`overflow-hidden shadow-md hover:shadow-lg transition-shadow ${getColSpan(image.aspect)}`} whileHover={{ y: -5 }} layout>
                <motion.img
                  src={image.src}
                  alt="Gallery image"
                  className={`w-full ${getImageHeight(image.aspect)} object-cover cursor-pointer`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(image.src)}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative max-w-3xl w-full">
                <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>&times;</button>
                <img src={selectedImage} alt="Selected" className="w-full h-auto max-h-[90vh] mx-auto rounded-lg shadow-lg" />
              </div>
            </div>
          )}
        </div>
    </section>
  );
};

export default WeddingGallery;
