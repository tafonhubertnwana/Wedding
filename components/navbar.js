
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Allura } from 'next/font/google';

// Configure Allura (400 is the only available weight)
const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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

    // Set initial active section based on hash
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
      <nav className={`fixed w-full z-50 transition-shadow duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'text-white'}`}>
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
  <div className={`text-4xl font-normal tracking-wider text-amber-500 ${allura.className}`}>
  <Link href="/">RETA2025</Link>
</div>
    <div className="hidden md:flex space-x-6">
      <Link 
        href="/" 
        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-300 relative ${activeSection === '/' ? 'active-link' : ''}`}
      >
        Home
        {activeSection === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#story" 
        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-300 relative ${activeSection === '#story' ? 'active-link' : ''}`}
      >
        Story
        {activeSection === '#story' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#wedding" 
        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-300 relative ${activeSection === '#wedding' ? 'active-link' : ''}`}
      >
        Wedding
        {activeSection === '#wedding' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#gallery" 
        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-300 relative ${activeSection === '#gallery' ? 'active-link' : ''}`}
      >
        Gallery
        {activeSection === '#gallery' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#events" 
        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-300 relative ${activeSection === '#events' ? 'active-link' : ''}`}
      >
        Events
        {activeSection === '#events' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#contact" 
        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-300 relative ${activeSection === '#contact' ? 'active-link' : ''}`}
      >
        Contact
        {activeSection === '#contact' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
    </div>
    <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-black' : 'text-white'} md:hidden focus:outline-none`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  {/* Mobile Menu */}
  <div className={`md:hidden fixed inset-y-0 left-0 w-72 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
    <div className="flex justify-between items-center p-4 border-b">
      <div className="text-2xl font-bold text-gray-800">Logo</div>
      <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div className="p-4">
      <Link 
        href="/" 
        className={`block py-2 text-gray-800 hover:text-yellow-300 relative ${activeSection === '/' ? 'active-link' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        Home
        {activeSection === '/' && <span className="absolute bottom-2 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#story" 
        className={`block py-2 text-gray-800 hover:text-yellow-300 relative ${activeSection === '#story' ? 'active-link' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        Story
        {activeSection === '#story' && <span className="absolute bottom-2 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#wedding" 
        className={`block py-2 text-gray-800 hover:text-yellow-300 relative ${activeSection === '#wedding' ? 'active-link' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        Wedding
        {activeSection === '#wedding' && <span className="absolute bottom-2 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#gallery" 
        className={`block py-2 text-gray-800 hover:text-yellow-300 relative ${activeSection === '#gallery' ? 'active-link' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        Gallery
        {activeSection === '#gallery' && <span className="absolute bottom-2 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#events" 
        className={`block py-2 text-gray-800 hover:text-yellow-300 relative ${activeSection === '#events' ? 'active-link' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        Events
        {activeSection === '#events' && <span className="absolute bottom-2 left-0 w-full h-0.5 bg-current"></span>}
      </Link>
      <Link 
        href="#contact" 
        className={`block py-2 text-gray-800 hover:text-yellow-300 relative ${activeSection === '#contact' ? 'active-link' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        Contact
        {activeSection === '#contact' && <span className="absolute bottom-2 left-0 w-full h-0.5 bg-current"></span>}
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
    className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 animate-float ${isScrolled ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}
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

export default Navbar;