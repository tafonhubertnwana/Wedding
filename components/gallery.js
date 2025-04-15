'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Allura } from 'next/font/google';

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
    { id: 1, src: '/images/gallery-1.jpg', category: 'FRIENDS', aspect: 'wide' },
    { id: 2, src: '/images/gallery-2.jpg', category: 'BANQUET', aspect: 'portrait' },
    { id: 3, src: '/images/gallery-3.jpg', category: 'FAMILY', aspect: 'square' },
    { id: 4, src: '/images/gallery-4.jpg', category: 'PARTY', aspect: 'landscape' },
    { id: 5, src: '/images/gallery-5.jpg', category: 'FRIENDS', aspect: 'portrait' },
    { id: 6, src: '/images/gallery-6.jpg', category: 'BANQUET', aspect: 'square' },
    { id: 7, src: '/images/gallery-7.jpg', category: 'PARTY', aspect: 'landscape' },
    { id: 8, src: '/images/gallery-8.jpg', category: 'FAMILY', aspect: 'portrait' },
    { id: 9, src: '/images/gallery-9.jpg', category: 'FRIENDS', aspect: 'square' },
    { id: 10, src: '/images/gallery-10.jpg', category: 'BANQUET', aspect: 'landscape' },
    { id: 11, src: '/images/gallery-11.jpg', category: 'FAMILY', aspect: 'square' },
    { id: 12, src: '/images/gallery-12.jpg', category: 'PARTY', aspect: 'square' },
    { id: 13, src: '/images/gallery-13.jpg', category: 'PARTY', aspect: 'square' },
    { id: 14, src: '/images/gallery-14.jpg', category: 'PARTY', aspect: 'square' },
    { id: 15, src: '/images/gallery-15.jpg', category: 'PARTY', aspect: 'square' },
    { id: 16, src: '/images/gallery-16.jpg', category: 'PARTY', aspect: 'square' },
    { id: 17, src: '/images/gallery-17.jpg', category: 'PARTY', aspect: 'square' },
  ];

  const filteredImages = activeCategory === 'ALL MOMENTS'
    ? images
    : images.filter(img => img.category === activeCategory);

  const aspectClass = {
    square: 'aspect-[1/1]',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
  };

  return (
    <section id="gallery" className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className={`${allura.className} text-5xl text-center text-purple-700 mb-12`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wedding Gallery
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-full border ${
                activeCategory === category
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-purple-50 hover:text-purple-700'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              className={`overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer bg-white ${aspectClass[image.aspect]}`}
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ y: -4 }}
              layout
            >
              <img
                src={image.src}
                alt="Wedding Moment"
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative max-w-3xl w-full p-4">
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Wedding Moment"
                className="w-full h-auto rounded-xl border border-white shadow-2xl max-h-[85vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingGallery;
