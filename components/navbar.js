"use client"
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import { Allura } from 'next/font/google';

// Configure Allura (400 is the only available weight)
const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});

const NavbarContent= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is at the very top
      if (window.scrollY === 0 && !window.location.hash) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }

      // Show back to top button when scrolled down 200px
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Detect which section is in view
      const sections = ['#story', '#wedding', '#gallery', '#events', '#contact'];
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial state based on hash
    if (window.location.hash) {
      setIsScrolled(true); // If there's a hash, navbar should be white
    } else if (window.scrollY === 0) {
      setIsScrolled(false); // If no hash and at top, navbar is transparent
    } else {
      setIsScrolled(true); // If no hash but scrolled, navbar is white
    }

    // Set initial active section
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update active section when URL changes
    if (window.location.hash) {
      setActiveSection(window.location.hash);
      setIsScrolled(true); // Ensure navbar is white when section changes
    } else if (pathname === '/') {
      setActiveSection('/');
    }
  }, [pathname, searchParams]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-amber-500' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-4xl font-normal tracking-wider ${isScrolled ? 'text-amber-500' : 'text-white'} ${allura.className}`}>
            <Link href="/">RETA2025</Link>
          </div>
          <div className="hidden xl:flex space-x-6">
            <Link 
              href="/" 
              className={`${isScrolled ? 'text-amber-500' : 'text-white'} hover:text-yellow-300 ${activeSection === '/' ? 'font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="#story" 
              className={`${isScrolled ? 'text-amber-500' : 'text-white'} hover:text-yellow-300 ${activeSection === '#story' ? 'font-bold' : ''}`}
            >
              Story
            </Link>
            
            <Link 
              href="#events" 
              className={`${isScrolled ? 'text-amber-500' : 'text-white'} hover:text-yellow-300 ${activeSection === '#events' ? 'font-bold' : ''}`}
            >
              Events
            </Link>
            <Link 
              href="#gallery" 
              className={`${isScrolled ? 'text-amber-500' : 'text-white'} hover:text-yellow-300 ${activeSection === '#gallery' ? 'font-bold' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className={`${isScrolled ? 'text-amber-500' : 'text-white'} hover:text-yellow-300 ${activeSection === '#contact' ? 'font-bold' : ''}`}
            >
              Contact
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-amber-500' : 'text-white'} md:hidden focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-y-0 left-0 w-72 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-2xl font-bold text-gray-800">RETA2025</div>
            <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            <Link 
              href="/" 
              className={`block py-2 text-gray-800 hover:text-yellow-300 ${activeSection === '/' ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#story" 
              className={`block py-2 text-gray-800 hover:text-yellow-300 ${activeSection === '#story' ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Story
            </Link>
            
            <Link 
              href="#events" 
              className={`block py-2 text-gray-800 hover:text-yellow-300 ${activeSection === '#events' ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="#gallery" 
              className={`block py-2 text-gray-800 hover:text-yellow-300 ${activeSection === '#gallery' ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className={`block py-2 text-gray-800 hover:text-yellow-300 ${activeSection === '#contact' ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Overlay */}
        {isOpen && (
          <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
        )}
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 animate-float bg-yellow-400 text-black"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <Suspense fallback={<div className="h-16 bg-white"></div>}>
      <NavbarContent />
    </Suspense>
  )
}

export default Navbar;