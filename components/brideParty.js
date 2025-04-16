'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Allura } from 'next/font/google';
import Image from 'next/image';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const groomsmen = [
  { name: 'Abongwa Gavin', image: '/images/groomsmen-1.jpg' },
  { name: 'Kimeng Terence', image: '/images/groomsmen-2.jpg' },
  { name: 'Takang Igal', image: '/images/groomsmen-3.jpg' },
  { name: 'Anjiituo Boris', image: '/images/groomsmen-4.jpg' },
  { name: 'Tankwa Edwin', image: '/images/groomsmen-5.jpg' },
];

const bridesmaids = [
  { name: 'Tabenyang Erika', image: '/images/bridemaid-1.jpg' },
  { name: 'Ambock Zeldine', image: '/images/bridemaid-2.jpg' },
  { name: 'Nkongho Sally', image: '/images/bridemaid-3.jpg' },
  { name: 'Tabenyang Collette', image: '/images/bridemaid-4.jpg' },
  { name: 'Ndip Kelline', image: '/images/bridemaid-5.jpg' },
];

const BridalParty = () => {
  const [activeTab, setActiveTab] = useState('groomsmen');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = activeTab === 'groomsmen' ? groomsmen : bridesmaids;

  return (
    <div className="px-6 py-12 bg-purple-500">
      <div className="container xl:max-w-6xl mx-auto p-6">
      <h1 className={`${allura.className} text-4xl sm:text-5xl md:text-5xl font-serif text-amber-400 text-center mb-8`}>
  The Bridal Party
</h1>


        <div className="flex justify-center space-x-6 mb-10">
          <button
            onClick={() => setActiveTab('groomsmen')}
            className={`text-lg font-medium border-b-2 transition-all duration-300 ${
              activeTab === 'groomsmen'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-black'
            }`}
          >
            Groomsmen
          </button>
          <button
            onClick={() => setActiveTab('bridesmaids')}
            className={`text-lg font-medium border-b-2 transition-all duration-300 ${
              activeTab === 'bridesmaids'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-black'
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
              onClick={() => setSelectedPerson(person)}
            >
              <div className="border-2 border-rose-100/50 hover:border-rose-100 transition-colors duration-300 p-1 rounded-lg overflow-hidden w-full aspect-[3/4] cursor-pointer">
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
            </div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPerson(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-xl max-w-md w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="rounded-t-xl w-full object-cover max-h-[70vh]"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{selectedPerson.name}</h2>
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="mt-4 px-4 py-2 text-sm bg-rose-100 text-rose-700 rounded hover:bg-rose-200 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BridalParty;
