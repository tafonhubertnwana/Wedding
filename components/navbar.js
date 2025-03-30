"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-shadow duration-300 ${isScrolled ? 'bg-orange-300 shadow-lg' : ''} `}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="/">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-600">Home</Link>
          <Link href="/story" className="text-white hover:text-gray-600">Story</Link>
          <Link href="/wedding" className="text-white hover:text-gray-600">Wedding</Link>
          <Link href="/gallery" className="text-white hover:text-gray-600">Gallery</Link>
          <Link href="/events" className="text-white hover:text-gray-600">Events</Link>
          <Link href="/contact" className="text-white hover:text-gray-600">Contact</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-2xl font-bold text-gray-800">Logo</div>
          <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-4">
          <Link href="/" className="block py-2 text-gray-800 hover:text-gray-600">Home</Link>
          <Link href="/story" className="block py-2 text-gray-800 hover:text-gray-600">Story</Link>
          <Link href="/wedding" className="block py-2 text-gray-800 hover:text-gray-600">Wedding</Link>
          <Link href="/gallery" className="block py-2 text-gray-800 hover:text-gray-600">Gallery</Link>
          <Link href="/events" className="block py-2 text-gray-800 hover:text-gray-600">Events</Link>
          <Link href="/contact" className="block py-2 text-gray-800 hover:text-gray-600">Contact</Link>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
      )}
    </nav>
  );
};

export default Navbar;