"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HomeBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [currentSubText, setCurrentSubText] = useState(0);

  const images = [
    '/images/background.jpg',
    '/images/background.jpg',
    '/images/background.jpg',
  ];

  const texts = [
    "We are getting married!",
    "Save the date!",
    "October 15, 2023",
  ];

  const subTexts = [
    "Join us as we begin our journey together.",
    "Mark your calendars for the big day!",
    "We can't wait to celebrate with you!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setCurrentText((prev) => (prev + 1) % texts.length);
      setCurrentSubText((prev) => (prev + 1) % subTexts.length);
    }, 5000); // Change image and text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${images[currentImage]})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold animate-fadeIn">
          {texts[currentText]}
        </h1>
        <p className="mt-4 text-2xl animate-fadeInDelay">
          {subTexts[currentSubText]}
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;