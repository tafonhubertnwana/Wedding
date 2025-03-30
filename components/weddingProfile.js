// components/WeddingInvitation.js
'use client'
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const WeddingInvitation = () => {
  return (
    <div className=" bg-white p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container xl:max-w-6xl mx-auto p-4"
      >
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
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


        <motion.div 
  className="flex justify-between items-center" // Added items-center to center-align children
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
> {/* Joseph section */}
<motion.div 
  className="mb-12"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  <h2 className="text-3xl font-semibold mb-4 text-gray-800">Joseph</h2>
  <p className="text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</motion.div>

{/* Heart Divider */}
<motion.div
  className="flex justify-center items-center my-8"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.7, duration: 0.5 }}
>
  <motion.div
    animate={{
      scale: [1, 1.2, 1], // Beat animation sequence
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity, // Makes the animation loop
      ease: "easeInOut",
    }}
  >
    <FaHeart className="text-red-500 text-3xl" />
  </motion.div>
</motion.div>

{/* Anna section */}
<motion.div
  className="mt-12"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.9, duration: 0.6 }}
>
  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Anna</h3>
  <p className="text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</motion.div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default WeddingInvitation;