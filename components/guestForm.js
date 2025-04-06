"use client"

import { useState, useRef } from "react"; // Added useRef here
import { motion } from "framer-motion";
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function GuestForm() {
  const [guests, setGuests] = useState([""]);
  const [attending, setAttending] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const addGuest = () => {
    setGuests([...guests, ""]);
  };

  const handleGuestChange = (index, value) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };

  return (
    <div id="contact" className=" bg-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl overflow-hidden md:grid md:grid-cols-2 gap-10">
        <div className="p-10  mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className={`${allura.className} text-3xl font-cursive text-center mb-4`}>
            Guest Form
          </motion.h2>
          <p className="text-center text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>

          <form className="space-y-4 max-w-4xl mx-auto">
            <p className="font-semibold">Will you be attending the wedding?</p>
            <div className="flex gap-4">
              <button 
                type="button" 
                className={`w-full py-2 border ${attending === 'yes' ? 'bg-purple-500 text-white' : 'bg-white'} transition-all`} 
                onClick={() => setAttending("yes")}>Yes</button>
              <button 
                type="button" 
                className={`w-full py-2 border ${attending === 'no' ? 'bg-purple-500 text-white' : 'bg-white'} transition-all`} 
                onClick={() => setAttending("no")}>No</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your name*" className="border p-2 w-full" />
              <input type="email" placeholder="Email*" className="border p-2 w-full" />
            </div>
            <p className="font-semibold">Who else is coming with you?</p>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Guest name" 
                value={guests[0]} 
                onChange={(e) => handleGuestChange(0, e.target.value)}
                className="border p-2 w-full" 
              />
              <button 
                type="button" 
                className="border px-4 text-sm" 
                onClick={addGuest}>
                Add guest
              </button>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="bg-purple-500 text-white px-6 py-2 w-full">Submit</button>
            </div>
          </form>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <video
            ref={videoRef}
            src="/images/aws-cloud.mp4"
            className="object-cover w-full h-full rounded-lg"
            onClick={togglePlay}
          />
          
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="bg-white bg-opacity-70 rounded-full p-4 hover:bg-opacity-90 transition"
                onClick={togglePlay}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.66z" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}