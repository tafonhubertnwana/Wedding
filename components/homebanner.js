"use client";
import Image from "next/image";
import { Allura } from 'next/font/google';
import Navbar from "./navbar";

// Load Allura font
const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const HomeBanner = () => {
  const image = "/images/reta-bg.jpg";

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[750px] xl:h-[980px] flex items-center justify-center overflow-hidden">
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
          <div className="container mx-auto flex justify-center items-center h-full">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-center md:text-right pl-6 md:pl-0">
              {/* Allura applied to h1 */}
              <h1 className={`${allura.className} flex md:justify-end justify-end text-4xl sm:text-6xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 text-amber-500 drop-shadow-lg`}>
                Regina & Etanyeor
              </h1>

              <div className="flex md:justify-end justify-end">
  <Image 
    src="/images/rings.png"
    alt="Regina and Etanyeor"
    width={150}
    height={150}
    className=" w-24 sm:w-28 md:w-32 lg:w-36 filter brightness-0 invert sepia saturate-100 hue-rotate-10 drop-shadow-md"
    style={{ filter: 'invert(72%) sepia(56%) saturate(581%) hue-rotate(2deg) brightness(95%) contrast(90%)' }}
  />
</div>


              <p className="text-lg  font-semibold sm:text-xl md:text-2xl lg:text-3xl  text-amber-300 drop-shadow-sm flex md:justify-end justify-end">
                April 25, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;