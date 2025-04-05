'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMap, FaUser, FaPhone } from 'react-icons/fa';
import { Allura } from 'next/font/google';

// Load Allura font
const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const events = [
  {
    title: 'Civil Wedding',
    icon: '/images/bride.png',
    date: 'Friday April 25, 2025',
    time: '@10:ooAM Prompt',
    location: 'Douala-Cameroon',
    address: 'Douala 4 Council',
    
  },
  {
    title: 'Traditional Wedding',
    icon: '/images/hall.png',
    date: 'Friday April 25, 2025',
    time: '@7:00PM Prompt',
    location: 'Douala-Cameroon',
    address: 'London City Bojongo',
  },
  {
    title: 'Blessing of Marriage',
    icon: '/images/hall.png',
    date: 'Saturday April 26, 2025',
    time: '@10:00AM Prompt',
    location: 'Douala-Cameroon',
    address: 'Presbyterian Church Bonaberi',
  },
  {
    title: 'Reception',
    icon: '/images/hall.png',
    date: 'Saturday April 20, 2016',
    time: '@6:00PM Prompt',
    location: 'Douala-Cameroon',
    address: 'Behind road Bonaberi-Douala ',
  },
];

const WeddingInfo = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2025-04-26T11:00:00');
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <section id='wedding' className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-[url('/images/bg.webp')] bg-cover bg-center text-center">
  {/* Countdown Timer */}
  <div className="container xl:max-w-6xl mx-auto p-6">
    <div className="flex gap-2 justify-center sm:gap-4 -mt-36 mb-16">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-800 font-bold p-3 px-5 rounded-md shadow-md text-lg backdrop-blur-sm bg-opacity-80"
        >
          <span className="block text-3xl">{value}</span>
          <span className="text-sm font-semibold">
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </span>
        </motion.div>
      ))}
    </div>
  </div>

  <div className="container xl:max-w-6xl mx-auto relative z-20 px-4 sm:px-6">
    {/* Title Section */}
    <div className="relative inline-block text-center w-full mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${allura.className}text-4xl sm:text-5xl md:text-6xl text-gray-800 relative z-10 `}
      >
        Wedding Information
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-64 h-px bg-amber-400 opacity-70"
      />
    </div>
    
    {/* Subtitle */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-2 text-gray-600 max-w-2xl mx-auto text-center text-lg sm:text-xl font-light italic"
    >
      Join us as we celebrate our special day
    </motion.p>
    
    {/* Events Grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)"
          }}
          className={`p-8 w-full bg-white rounded-xl shadow-sm text-center border ${
            event.button ? 'border-amber-300' : 'border-gray-100'
          } hover:shadow-lg transition-all`}
        >
          <h3 className="text-3xl text-gray-800 mb-6 font-allura">{event.title}</h3>
          
          <div className="space-y-4 text-gray-600">
            <p className="flex items-center justify-center gap-3 text-lg">
              <FaCalendarAlt className="text-amber-500 text-xl" /> 
              <span className="font-medium">{event.date}</span>
            </p>
            <p className="flex items-center justify-center gap-3 text-lg">
              <FaClock className="text-amber-500 text-xl" /> 
              <span>{event.time}</span>
            </p>
            <p className="flex items-center justify-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-amber-500 text-xl" /> 
              <span>{event.location}</span>
            </p>
            <p className="text-gray-500 mt-4">{event.address}</p>
            
            {event.button && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-3 bg-amber-500 text-white rounded-full text-md font-medium hover:bg-amber-600 transition-colors"
              >
                Get Directions
              </motion.button>
            )}
          </div>
        </motion.div>
      ))}
    </div>

    {/* RSVP Section */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-20 bg-amber-50 rounded-xl p-8 sm:p-10 max-w-4xl mx-auto border border-amber-200"
    >
      <h3 className="text-4xl text-center text-gray-800 mb-8 font-bold">R.S.V.P</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Groom's Family Contact */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100">
          <h4 className="text-2xl text-gray-800 mb-6 font-bold">
            Groom's Family
          </h4>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700 text-lg">
              <FaPhone className="text-amber-500 text-xl" /> 
              <span>(+237) 670 689 462</span>
            </p>
            <p className="flex items-center gap-3 text-gray-700 text-lg">
              <FaPhone className="text-amber-500 text-xl" /> 
              <span>(+237) 670 011 446</span>
            </p>
            <p className="flex items-center gap-3 text-gray-700 text-lg">
              <FaPhone className="text-amber-500 text-xl" /> 
              <span>(+237) 675 938 332</span>
            </p>
            <p className="text-gray-500 mt-6 text-center italic">
              Please confirm your attendance by June 15th
            </p>
          </div>
        </div>
        
        {/* Bride's Family Contact */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100">
          <h4 className="text-2xl text-gray-800 mb-6 font-bold">
            Bride's Family
          </h4>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700 text-lg">
              <FaPhone className="text-amber-500 text-xl" /> 
              <span>(+237) 683 857 458</span>
            </p>
            <p className="flex items-center gap-3 text-gray-700 text-lg">
              <FaPhone className="text-amber-500 text-xl" /> 
              <span>(+237) 679 118 315</span>
            </p>
            <p className="text-gray-500 mt-6 text-center italic">
              Please confirm your attendance by June 15th
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(245, 158, 11, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-amber-500 text-white rounded-full text-lg font-medium hover:bg-amber-600 transition-colors shadow-lg"
        >
          Send Digital RSVP
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
  );
}

export default WeddingInfo;