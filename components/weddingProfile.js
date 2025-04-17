// components/WeddingInvitation.js
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import WeddingTimeline from "@/components/timeLine";
import { Allura } from 'next/font/google';
import { useState } from 'react';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const WeddingInvitation = () => {
  
  const [showFull, setShowFull] = useState(false);
  return (
    <section id='story'>
       <section className="w-full bg-[#C97345] text-white">
        <div className='container xl:max-w-6xl mx-auto p-6 '>

        <div className="bg-[#C97345] text-white">
  <div className="container xl:max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      
      {/* Left Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:justify-start items-center text-center md:text-left"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight">
          Our  Story
        </h2>
      </motion.div>

      {/* Right Paragraphs */}
      <motion.div
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6 text-base sm:text-lg leading-relaxed text-justify"
    >
      <p>
        It all started in early December 2018 when I met this beautiful lady in the University of Buea as I went to visit a friend and we were taking a stroll. It was through a friend, his name; Ebot Carl and also later through Arreyvite Tambe. Seeing them talk with her, and how she responded & behaved, made me want to know her more.
      </p>
      <p>
        Since I was already based in Douala, fortunately for me the next time they came to Douala, they came along with her, also as the socio-political crisis was raging in the South west. They visited me with her twice when I got to know her better and spoke to her several times. We got to know each other and exchanged contacts. We felt comfortable with each other and got into a relationship towards the end of December 2018. 
      </p>

      {showFull && (
        <>
          <p>
            Through out the time of our relationship in 2019, we got to understand each other better and faced a reasonable share of challenges as we tried to dream big. As we faced criticisms too, we saw opportunities to keep trying to carve our own path. In 2021, we had our daughter Eneketa Mayuk, and she came in, to completely rehsape our relationship and re-orient us as to our next steps. With her coming, we realised a lot of successes in our plans and we kept finding ways to resolve our minor issues while staying together.
          </p>
          <p>
            We focused more on trying to have a solid financial foundation for our family rather than getting married first, and making it legal. An action that drew sharp criticism from family and friends. However, we understood the principle of the family being two people willing to defend each other against all forms of criticism and believing in each other. It was a big risk for both of us too since we could face a break up if we lost interest in each other. However, we kept finding value in each other. We made a reasonable financial breakthrough in 2021 through some investments in financial assets. Instead of getting married, we decided to informally start a small consultancy business and a baby accessories supply business overseen by each of us individually, but jointly owned. The criticisms kept coming for we showed little signs of financial growth but were unable make our union official. We decided to incorporate our consultancy business instead and to handle the criticism.
          </p>
          <p>
            Finally in 2024, I knew I wanted to move ahead to making it official. I looked at using her birthday Jan 29, 2024 but failed due to time constraints. Therefore, August 31st my birthday was the only othe reasonable opportunity. We gathered friends at Mayuka Residence (Ancienne route), a day when she said yes to marrying me and now, we look forward to officially celebrating with you on April 25 & 26, 2025.
          </p>
          <p>
            We have several plans for the future and we look forward to God as we hope to work together to grow even more. We wish to thank everyone who has always been by us and we love you all.
          </p>
        </>
      )}

      <button
        onClick={() => setShowFull(!showFull)}
        className="text-purple-600 font-semibold hover:underline"
      >
        {showFull ? 'Read Less' : 'Read More'}
      </button>
    </motion.div>
    </div>
  </div>
</div>

        </div>
      </section>
      <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
         
          <motion.h1 
          className={`${allura.className}  text-4xl md:text-5xl font-bold text-center mb-8 text-amber-500`}
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

          {/* Couple section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Joseph section */}
            <motion.div 
              className="mb-8 md:mb-0 md:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="order-2 md:order-1 text-right">
                  <h2 className={`${allura.className} text-3xl font-semibold mb-4 text-amber-40 text-amber-400`}>Mr. Etanyeor</h2>
                  <p className="text-gray-600  text-justify leading-relaxed text-">
                  I am an Accountant and a Business Process Engineer, with a passion to provide innovative and common-sense solutions that re-orients businesses. As the majority Shareholder and Managing Director of Etanyeor Consulting Ltd, I oversee the re-engineering and design of business processes for entities we have engagements with. <br/>

I am a details-oriented person, enjoy following current affairs and on a mission to contribute to the development of my own community through the power of information technology. I also view family as the foundation of society and look forward to enjoying my own journey. I’ve pursued degrees in Accounting, and in Software Engineering and open to learning more in the coming years.   </p>             </div>
                <div className="order-1 md:order-2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200">
                    <Image 
                      src={'/images/eta.jpg'} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      alt="Joseph"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Heart Divider - visible only on larger screens */}
            <motion.div
              className="hidden md:flex justify-center items-center mx-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaHeart className="text-red-500 text-4xl" />
              </motion.div>
            </motion.div>
  {/* Mobile Heart Divider */}
  <motion.div
            className="flex md:hidden justify-center items-center my-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="text-red-500 text-4xl" />
            </motion.div>
          </motion.div>
            {/* Anna section */}
            <motion.div
              className="md:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200">
                    <Image 
                      src={'/images/regina.jpg'} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      alt="Anna"
                    />
                  </div>
                </div>
                <div>
                  <h2 className={`${allura.className} text-3xl font-semibold mb-4  text-amber-400`}>Mrs. Regina</h2>
                  <p className="text-gray-600 text-justify leading-relaxed">
                  I am the owner of Gina Kids Collection, a small business specialized in providing new born baby and young children outfits/accessories and located at Bonendale-Douala. As a Shareholder of Etanyeor Consulting Ltd, I share in the vision of the entity and play a role in defining and implementing its strategic objectives in cooperation with the managing director. I occupy the role of the Strategy Analyst for Etanyeor Consulting Ltd. <br/>

I am a language person, haven pursued a degree in English Language, I teach English language and Literature and I look forward to trying new paths in the future.     </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          
        </motion.div>
        <section>
          <WeddingTimeline />
        </section>
      </div>
    </section>
  );
};

export default WeddingInvitation;