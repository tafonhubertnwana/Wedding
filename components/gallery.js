"use client";
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
  const [showAll, setShowAll] = useState(false);

  const images = [
    { id: 1, src: '/images/gallery-1.jpg', category: 'FRIENDS' },
    { id: 2, src: '/images/gallery-2.jpg', category: 'BANQUET' },
    { id: 3, src: '/images/gallery-3.jpg', category: 'FAMILY' },
    { id: 4, src: '/images/gallery-4.jpg', category: 'PARTY' },
    { id: 5, src: '/images/gallery-5.jpg', category: 'FRIENDS' },
    { id: 6, src: '/images/gallery-6.jpg', category: 'BANQUET' },
    { id: 7, src: '/images/gallery-7.jpg', category: 'PARTY' },
    { id: 8, src: '/images/gallery-8.jpg', category: 'FAMILY' },
    { id: 9, src: '/images/gallery-9.jpg', category: 'FRIENDS' },
    { id: 10, src: '/images/gallery-10.jpg', category: 'BANQUET' },
    { id: 11, src: '/images/gallery-11.jpg', category: 'FAMILY' },
    { id: 12, src: '/images/gallery-12.jpg', category: 'PARTY' },
    { id: 13, src: '/images/gallery-13.jpg', category: 'PARTY' },
    { id: 14, src: '/images/gallery-14.jpg', category: 'PARTY' },
    { id: 15, src: '/images/gallery-15.jpg', category: 'PARTY' },
    { id: 16, src: '/images/gallery-16.jpg', category: 'PARTY' },
    { id: 17, src: '/images/gallery-17.jpg', category: 'PARTY' },
  ];

  const filteredImages = activeCategory === 'ALL MOMENTS'
    ? images
    : images.filter(img => img.category === activeCategory);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  return (
    <section id='gallery'>
      <div className="container xl:max-w-6xl mx-auto px-4 py-12 font-sans">
        <motion.h1
          className={`${allura.className} text-4xl sm:text-5xl md:text-5xl text-amber-400 font-bold text-center mb-6 custom-font`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wedding gallery
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-3 py-1 text-sm md:text-base transition-colors ${activeCategory === category ? 'font-bold text-amber-400 border-b-2 border-amber-400' : 'text-black hover:text-gray-800'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  {displayedImages.map((image) => {
    const isTall = [1, 7, 9, 24].includes(image.id);

    return (
      <motion.div
        key={image.id}
        className={`relative overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
          isTall ? 'md:row-span-2 md:h-[472px]' : 'h-48 sm:h-56'
        }`}
        whileHover={{ y: -5 }}
        layout
      >
        <motion.img
          src={image.src}
          alt="Gallery image"
          className={` ${isTall ? 'h-full' : 'h-54 w-54 '} object-cover cursor-pointer`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedImage(image.src)}
        />
      </motion.div>
    );
  })}
</motion.div>


        {!showAll && filteredImages.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 text-base font-medium text-white bg-purple-500 rounded hover:bg-purple-800 transition"
              onClick={() => setShowAll(true)}
            >
              View All
            </button>
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto max-h-[90vh] mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingGallery;
