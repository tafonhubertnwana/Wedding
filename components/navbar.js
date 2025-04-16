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

const NavbarContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const scrollToSection = (id) => {
    if (id === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Update URL without hash
      if (history.pushState) {
        history.pushState(null, null, ' ');
      }
      setActiveSection('/');
      return;
    }

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, null, id);
      } else {
        window.location.hash = id;
      }
      
      setActiveSection(id);
      setIsScrolled(true);
    }
  };

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
      setIsScrolled(true);
    } else if (window.scrollY === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
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
      setIsScrolled(true);
    } else if (pathname === '/') {
      setActiveSection('/');
    }
  }, [pathname, searchParams]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('/');
  };

  const navLinks = [
    { id: '/', text: 'Home' },
    { id: '#story', text: 'Story' },
    { id: '#events', text: 'Events' },
    { id: '#gallery', text: 'Gallery' },
    { id: '#contact', text: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-amber-500' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-4xl font-normal tracking-wider ${isScrolled ? 'text-amber-500' : 'text-white'} ${allura.className}`}>
            <Link href="/" onClick={(e) => {
              e.preventDefault();
              scrollToSection('/');
            }}>RETA2025</Link>
          </div>
          <div className="hidden xl:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`${isScrolled ? 'text-amber-500' : 'text-white'} hover:text-amber-500 ${activeSection === link.id ? 'font-bold' : ''}`}
              >
                {link.text}
              </a>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-amber-500' : 'text-white'} lg:hidden focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-y-0 left-0 w-72 md:w-84 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="flex justify-between items-center p-4 border-b">
            <div className={`text-4xl font-normal tracking-wider text-amber-500 ${allura.className}`}>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                scrollToSection('/');
                setIsOpen(false);
              }}>RETA2025</a>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className={`block py-2 text-gray-800 hover:text-amber-500 ${activeSection === link.id ? 'font-bold' : ''}`}
              >
                {link.text}
              </a>
            ))}
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