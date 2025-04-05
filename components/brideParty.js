'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const groomsmen = [
  { name: 'Julian Bernard', image: '/groomsmen1.jpg' },
  { name: 'Damán Haber', image: '/groomsmen2.jpg' },
  { name: 'Patrik Pavone', image: '/groomsmen3.jpg' },
  { name: 'David Tatum', image: '/groomsmen4.jpg' },
  { name: 'David Tatum', image: '/groomsmen4.jpg' },

];

const bridesmaids = [
  { name: 'Anna Cole', image: '/bridesmaid1.jpg' },
  { name: 'Sophia Lenz', image: '/bridesmaid2.jpg' },
  { name: 'Maria Nguyen', image: '/bridesmaid3.jpg' },
  { name: 'Rachel Bloom', image: '/bridesmaid4.jpg' },
  { name: 'Rachel Bloom', image: '/bridesmaid4.jpg' },
];

const BridalParty = () => {
  const [activeTab, setActiveTab] = useState('groomsmen');

  const people = activeTab === 'groomsmen' ? groomsmen : bridesmaids;

  return (
    <div className=" px-6 py-12 bg-pink-50">
      <div className='container xl:max-w-6xl mx-auto p-6'>

        <h1 className="text-4xl font-serif text-center mb-8">The Bridal Party</h1>

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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center"
        >
          {people.map((person, index) => (
            <div key={index} className="text-center">
              <div className="border-4 border-rose-100 p-1 rounded-lg overflow-hidden w-44 h-56">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="mt-4 text-lg font-serif">{person.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BridalParty;
