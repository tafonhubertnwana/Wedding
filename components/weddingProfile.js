// components/WeddingInvitation.js
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import WeddingTimeline from "@/components/timeLine";
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const WeddingInvitation = () => {
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
        It all started in 2018, precisely December 2018 when I met this beautiful lady in the University of Buea. It was through a friend, his name is Ebot. So I later spoke to him and I said, "Who is that girl? Can I be...
        </p>
        <p>
        maybe can I have the opportunity to meet her sometime?" So he promised me, and not long from then, he brought her to Douala. So the first time we actually sat down and spoke is when she came to my house and I asked her a little bit about herself and she... so we put up a date and towards the end of December 2018, the first place we started was Santa Lucia Bonaberi where we had some drinks and food. 
        </p>
        <p>
        And on that same day when I saw her off around midnight... and that was our first kiss. So later on we got to know each other and since then God has been so faithful. Uh, I want to thank God for everything that has happened and I look forward to having Mrs. Etanyeor. 
        </p>
        <p>
        So dear friends, we look forward to celebrating with you. We wish to invite you to our marriage celebration which will take place on April 23rd, 2025. We appreciate your presence. Thank you very much.

        </p>
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
                  I am a software engineer and entrepreneur with a passion for building innovative digital solutions that make everyday life easier. With a background in computer science and over eight years of industry experience, I’ve worked on everything from fintech platforms to community-focused apps. I believe in the power of technology to connect people and create opportunities, and I’m always exploring new ideas that combine creativity, functionality, and impact. Outside of work, I enjoy mentoring aspiring developers and contributing to open-source projects.                  </p>
                </div>
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
                  I am an interior designer and creative consultant with a deep passion for transforming spaces into stories. With over ten years of experience, I specialize in curating elegant, functional interiors that reflect the personality and lifestyle of each client. My work blends timeless design with modern touches, and I find joy in crafting environments that inspire comfort, connection, and beauty. Whether it’s a cozy home or a stylish commercial space, I believe design should always speak from the heart.     </p>
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