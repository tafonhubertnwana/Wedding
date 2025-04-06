
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const groomsmen = [
  { name: 'Julian Bernard', image: '/images/groomsmen1.jpeg' },
  { name: 'Damán Haber', image: '/images/groomsmen2.jpeg' },
  { name: 'Patrik Pavone', image: '/images/groomsmen3.jpeg' },
  { name: 'David Tatum', image: '/images/groomsmen1.jpeg' },
  { name: 'David Tatum', image: '/images/groomsmen2.jpeg' },

];

const bridesmaids = [
  { name: 'Anna Cole', image: '/images/bridesmaid1.jpeg' },
  { name: 'Sophia Lenz', image: '/images/bridesmaid2.jpeg' },
  { name: 'Maria Nguyen', image: '/images/bridesmaid3.jpeg' },
  { name: 'Rachel Bloom', image: '/images/bridesmaid1.jpeg' },
  { name: 'Rachel Bloom', image: '/images/bridesmaid2.jpeg' },
];

const BridalParty = () => {
  const [activeTab, setActiveTab] = useState('groomsmen');

  const people = activeTab === 'groomsmen' ? groomsmen : bridesmaids;

  return (
    <div className=" px-6 py-12 bg-amber-50 ">
      <div className='container xl:max-w-6xl mx-auto p-6'>

        <h1 className={`${allura.className} text-4xl font-serif text-center mb-8`}>The Bridal Party</h1>

        <div className="flex justify-center space-x-6 mb-10">
          <button
            onClick={() => setActiveTab('groomsmen')}
            className={`text-lg font-medium border-b-2 transition-all duration-300 ${
              activeTab === 'groomsmen' ? 'border-black text-black' : 'border-transparent text-gray-400'
            }`}
          >
            Groomsmen
          </button>
          <button
            onClick={() => setActiveTab('bridesmaids')}
            className={`text-lg font-medium border-b-2 transition-all duration-300 ${
              activeTab === 'bridesmaids' ? 'border-black text-black' : 'border-transparent text-gray-400'
            }`}
          >
            Bridesmaids
          </button>
        </div>

        <motion.div
  key={activeTab}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 justify-items-center"
>
  {people.map((person, index) => (
    <div 
      key={`${person.name}-${index}`} 
      className="text-center w-full max-w-[180px] md:max-w-[200px]"
    >
      <div className="border-2 border-rose-100/50 hover:border-rose-100 transition-colors duration-300 p-1 rounded-lg overflow-hidden w-full aspect-[3/4]">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-sm md:text-base font-medium text-gray-800 font-sans">
        {person.name}
      </p>
      {person.title && (
        <p className="text-xs text-gray-500 mt-1">{person.title}</p>
      )}
    </div>
  ))}
</motion.div>
      </div>
    </div>
  );
};

export default BridalParty;
