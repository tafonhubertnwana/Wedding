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
    description: "It was a cool evening, in December of 2018. We met at Maison H in Bonapriso. We had some drinks and food. Shared our stories, how far we’ve gone and the circumstances under which we met. In our conversations, we found the interest in each other and knew we needed to keeping talking for we hoped something special would grow from that.",
    image: '/images/gallery-11.jpg'
  },
  {
    year: "September 2021",
    title: "Our First Child",
    description: "Our daughter is Eneketa Mayuk and she was born on Friday September 10, 2021 at 11:45 am. It was a conscious decision to have her and she has been a blessing since then. She’s a very big girl now and is a good mixture of both of us in terms of character and physical appearance.",
    image: '/images/gallery-18.jpg'
  },
  {
    year: "May 2022",
    title: "Our vacation with our child.",
    description: "When Eneketa was 08 months old, we went on a vacation to Yaounde. We decided we would go on a plane to and fro. At the airport, an officer asked for her birth certificate to proof she’s not a stolen child. We laughed and asked if her face isn’t enough evidence. He laughed back. It was wonderful family vacation.",
    image: '/images/gallery-7.jpg'
  },
  {
    year: "August 2024",
    title: "The proposal.",
    description: "Haven been together for a very long time, almost 8 years, I decided I was going to propose and take on the marriage rites. I decided I was going to do so on my birthday August 31st 2024. I invited close friends under the pretext of a birthday party. She was surprised when she arrived and saw the number of people who had assembled. It was a wonderful evening as she said yes to me. We all enjoyed the evening and by September 1st, 2024, we began planning for our big event and decided it will be on April 25 & 26 of 2025.",
    image: '/images/gallery-21.jpg'
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
            <div className="md:hidden flex w-full ">
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
              <div className="w-3/4 pl-4  md:p-4" >
                <time className="font-mono italic text-gray-500 text-lg">{event.year}</time>
                <h3 className={`${allura.className} text-xl font-bold text-amber-400 mt-2`}>{event.title}</h3>
                <p className="text-gray-700 text-justify mt-1">{event.description}</p>
              </div>
            </div>
            
            {/* Desktop layout (alternating sides) */}
            <div className="hidden md:flex w-full ">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right ">
                    <time className="font-mono italic text-gray-500 text-lg">{event.year}</time>
                    <h3 className={`${allura.className} text-xl sm:text-2xl font-bold mt-2 text-amber-400`}>{event.title}</h3>
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
                    <h3 className={`${allura.className} text-xl sm:text-2xl font-bold mt-2 text-amber-400`}>{event.title}</h3>
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
              <h3 className={`${allura.className} text-xl sm:text-2xl font-bold mt-2 text-amber-400`}>We're Getting Married!</h3>
              <p className="text-gray-700 text-justify mt-1">After this After this beautiful journey together, we’ve seen a significant part of each other and are now ready to tie the knot and spend the rest of our lives as partners.

Join us as we celebrate our love on April 25 and 26, 2025, in 4 events (Traditional, Council, Church and Reception), all in Bonaberi - Douala.</p>
            </div>
          </div>
          
          <div className="hidden md:flex w-full">
            <div className="w-1/2 pr-8 text-right">
              <time className="font-mono italic text-gray-500 text-lg">April 25, 2025</time>
              <h3 className={`${allura.className} text-xl sm:text-2xl font-bold mt-2 text-amber-400`}>We're Getting Married!</h3>
              <p className="text-gray-700 mt-1">After this After this beautiful journey together, we’ve seen a significant part of each other and are now ready to tie the knot and spend the rest of our lives as partners.

Join us as we celebrate our love on April 25 and 26, 2025, in 4 events (Traditional, Council, Church and Reception), all in Bonaberi - Douala.</p>
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