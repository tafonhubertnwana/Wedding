"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function GuestForm() {
  const [guests, setGuests] = useState([""]);
  const [attending, setAttending] = useState(null);

  const addGuest = () => {
    setGuests([...guests, ""]);
  };

  const handleGuestChange = (index, value) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };

  return (
    <div className=" bg-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-2">
      <div className="p-10  mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-cursive text-center mb-4">
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
              className="border px-4" 
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
        className="relative  max-w-4xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80" 
          alt="Couple" 
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white bg-opacity-70 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.66z" />
            </svg>
          </button>
        </div>
      </motion.div>

      </div>
    </div>
  );
}
