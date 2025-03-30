"use client"; // Required for Framer Motion (Client Component)

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-04-25T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="my-8 bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">
          Countdown to Our Wedding
        </h1>
        <p className="text-lg text-purple-700">
          April 25, 2025
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl w-full"
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <motion.div
              key={value}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-4xl font-bold text-purple-600"
            >
              {Math.floor(value)}
            </motion.div>
            <div className="mt-2 text-sm uppercase tracking-wider text-purple-400">
              {unit}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-2xl font-bold text-pink-600"
        >
          🎉 The Wedding Day Has Arrived! 🎉
        </motion.div>
      )}
    </div>
  );
}