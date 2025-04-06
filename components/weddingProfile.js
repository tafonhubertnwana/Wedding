// components/WeddingInvitation.js
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import WeddingTimeline from "@/components/timeLine";
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const WeddingInvitation = () => {
  return (
    <section id='story'>
       <section className="w-full bg-[#C97345] text-white">
        <div className='container xl:max-w-6xl mx-auto p-6 '>

        <div className="bg-[#C97345] text-white">
  <div className="container xl:max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      
      {/* Left Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:justify-start items-center text-center md:text-left"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight">
          Our  Story
        </h2>
      </motion.div>

      {/* Right Paragraphs */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6 text-base sm:text-lg leading-relaxed text-justify"
      >
        <p>
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam
          lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis,
          fringilla varius. Quis purus nisl orci eu, ultrices. Purus pretium egestas
          ultricies tempus sit elit.
        </p>
        <p>
          Vitae lacus, aliquet lorem mauris, sit dolor sodales. Nullam quam quis lorem
          dui tristique massa enim. Faucibus sed egestas mollis vivamus et sed sed.
        </p>
        <p>
          Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
          nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu,
          ultrices. Purus pretium egestas ultricies tempus sit elit.
        </p>
      </motion.div>
    </div>
  </div>
</div>

        </div>
      </section>
      <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
         
          <motion.h1 
          className={`${allura.className}  text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800`}
          whileHover={{ scale: 1.02 }}
        >
          Hello!
        </motion.h1>

          {/* Invitation text */}
          <motion.p 
            className="text-xl md:text-2xl text-center mb-12 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We invite you to celebrate our wedding
          </motion.p>

          {/* Couple section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Joseph section */}
            <motion.div 
              className="mb-8 md:mb-0 md:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="order-2 md:order-1 text-right">
                  <h2 className={`${allura.className} text-3xl font-semibold mb-4 text-amber-40 text-amber-400`}>Etanyeor</h2>
                  <p className="text-gray-600  text-justify leading-relaxed text-">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200">
                    <Image 
                      src={'/images/image2.jpg'} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      alt="Joseph"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Heart Divider - visible only on larger screens */}
            <motion.div
              className="hidden md:flex justify-center items-center mx-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaHeart className="text-red-500 text-4xl" />
              </motion.div>
            </motion.div>
  {/* Mobile Heart Divider */}
  <motion.div
            className="flex md:hidden justify-center items-center my-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="text-red-500 text-4xl" />
            </motion.div>
          </motion.div>
            {/* Anna section */}
            <motion.div
              className="md:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200">
                    <Image 
                      src={'/images/image2.jpg'} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      alt="Anna"
                    />
                  </div>
                </div>
                <div>
                  <h2 className={`${allura.className} text-3xl font-semibold mb-4  text-amber-400`}>Regina</h2>
                  <p className="text-gray-600 text-justify leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          
        </motion.div>
        <section>
          <WeddingTimeline />
        </section>
      </div>
    </section>
  );
};

export default WeddingInvitation;