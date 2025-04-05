"use client";
import Image from "next/image";
import { Allura } from 'next/font/google';

// Load Allura font
const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const HomeBanner = () => {
  const image = "/images/reta-bg.jpg";

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[750px] xl:h-[900px] flex items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background Image */}
      <Image
        src={image}
        alt="Wedding background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Text Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-center md:justify-end items-center h-full">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-center md:text-right pl-6 md:pl-0">
            {/* Allura applied to h1 */}
            <h1 className={`${allura.className} text-5xl sm:text-6xl md:text-6 lg:text-7xl mb-2 sm:mb-3 text-amber-500 drop-shadow-lg`}>
            Regina & Etanyeor
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium mb-3 sm:mb-4 italic text-amber-400 drop-shadow-md">
              Will Get Married
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-amber-300 drop-shadow-sm">
              October 15, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;