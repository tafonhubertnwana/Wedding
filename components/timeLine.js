"use client"

import { motion } from "framer-motion";
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const timelineData = [
  {
    year: "December 2018",
    title: "First Date",
    description: "It was a chilly winter evening when we first met at that little Italian bistro downtown. I spilled my wine within five minutes (typical), but instead of laughing at me, you helped clean it up and ordered me another glass. We talked until the staff started stacking chairs, and I knew right then—this was different. You walked me home under the streetlights, and I replayed every word you said in my head for days.",
    image: '/images/gallery-11.jpg'
  },
  {
    year: "June 2020",
    title: "Our First Child",
    description: "By 'first child,' we mean Max, the golden retriever puppy who destroyed our couch but stole our hearts. You swore we wouldn't spoil him, yet by week two, he was sleeping in our bed. Those late-night potty walks and chewed-up shoes became our shared chaos—and I wouldn't trade it for anything. (Though I still blame you for letting him lick the butter off the counter that one time.)",
    image: '/images/gallery-18.jpg'
  },
  {
    year: "February 2022",
    title: "Second Date",
    description: "Yes, we call it a 'second date' because after three years together, we realized we'd never actually gone on a proper dinner-and-movie night like normal couples. So we recreated our first date—same restaurant, same wine spill (again, me)—but this time, you kissed me goodnight instead of that awkward hug. Progress.",
    image: '/images/gallery-7.jpg'
  },
  {
    year: "March 2023",
    title: "Our Vacation",
    description: "That cabin in the mountains with no WiFi, just a fireplace and a deck of cards. You burned the pancakes every morning, and I kept forgetting to pack socks. We hiked to a waterfall, where you slipped on a rock and came up laughing, soaked to the bone. I took a photo of that grin—your 'I don't care if I look ridiculous' grin—and it's still my phone wallpaper.",
    image: '/images/gallery-14.jpg'
  },
  {
    year: "April 2024",
    title: "The Proposal",
    description: "You planned a picnic at our favorite park, right under the oak tree where we had our first fight (over whether pineapple belongs on pizza). As I unwrapped the sandwiches, I found a ring tucked between the pickles. You said, 'I'd rather argue with you about stupid things forever than agree with anyone else.' Luna barked. I cried. You panicked when I took too long to say yes.",
    image: "/images/couple-1.jpg"
  },
];

const Timeline = () => {
  return (
    <div className="container xl:max-w-6xl mx-auto py-12 px-4 relative">
      {/* Vertical line - positioned differently for mobile/desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
      <div className="block md:hidden absolute left-8 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
      
      <ul className="relative">
        {timelineData.map((event, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Mobile/Tablet layout (image left, content right) */}
            <div className="md:hidden flex w-full">
              <div className="w-1/4 pr-4 flex justify-center">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full border-4 border-white shadow-lg bg-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="w-3/4 pl-4">
                <time className="font-mono italic text-gray-500 text-lg">{event.year}</time>
                <h3 className={`${allura.className} text-xl font-bold text-amber-400 mt-2`}>{event.title}</h3>
                <p className="text-gray-700 text-justify mt-1">{event.description}</p>
              </div>
            </div>
            
            {/* Desktop layout (alternating sides) */}
            <div className="hidden md:flex w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <time className="font-mono italic text-gray-500 text-lg">{event.year}</time>
                    <h3 className={`${allura.className} text-xl sm:text-2xl font-bold mt-2`}>{event.title}</h3>
                    <p className="text-gray-700 mt-1">{event.description}</p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg bg-white"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 flex justify-center">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg bg-white"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <time className="font-mono italic text-gray-500 text-lg">{event.year}</time>
                    <h3 className={`${allura.className} text-xl sm:text-2xl font-bold mt-2`}>{event.title}</h3>
                    <p className="text-gray-700 mt-1">{event.description}</p>
                  </div>
                </>
              )}
            </div>
          </motion.li>
        ))}

        {/* Marriage Announcement */}
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="md:hidden flex w-full">
            <div className="w-1/4 pr-4 flex justify-center">
              <motion.div
                className="w-16 h-16 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg bg-amber-400 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-white text-2xl">❤️</span>
              </motion.div>
            </div>
            <div className="w-3/4 pl-4">
              <time className="font-mono italic text-gray-500 text-lg">April 25, 2025</time>
              <h3 className="text-xl font-bold text-amber-400 mt-2">We're Getting Married!</h3>
              <p className="text-gray-700 text-justify mt-1">After this beautiful journey together, we've decided to tie the knot and spend the rest of our lives as partners. Join us as we celebrate our love!</p>
            </div>
          </div>
          
          <div className="hidden md:flex w-full">
            <div className="w-1/2 pr-8 text-right">
              <time className="font-mono italic text-gray-500 text-lg">April 25, 2025</time>
              <h3 className="text-xl font-bold text-amber-400 mt-2">We're Getting Married!</h3>
              <p className="text-gray-700 mt-1">After this beautiful journey together, we've decided to tie the knot and spend the rest of our lives as partners. Join us as we celebrate our love!</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <motion.div
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg bg-amber-400 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-white text-4xl">❤️</span>
              </motion.div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </motion.li>
      </ul>
    </div>
  );
};

export default Timeline;