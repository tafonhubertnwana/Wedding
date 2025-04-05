"use client"; 
// components/Footer.js
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (

    <motion.footer 
      className="bg-black border-t border-gray-100 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Wedding couple names */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-serif font-medium text-white">
              Regina & Etanyeor
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Celebrating our love on April 25, {currentYear}
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link href="/our-story" className="text-gray-300 hover:text-white transition-colors text-sm">
              Our Story
            </Link>
            <Link href="/events" className="text-gray-300 hover:text-white transition-colors text-sm">
              Events
            </Link>
            <Link href="/rsvp" className="text-gray-300 hover:text-white transition-colors text-sm">
              RSVP
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
              Gallery
            </Link>
          </nav>

          {/* Social links */}
          <div className="flex space-x-4">
  <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  </Link>
  <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </Link>
  <Link href="#" aria-label="X (Twitter)" className="text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </Link>
 
  <Link href="#" aria-label="Email" className="text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    </svg>
  </Link>
</div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>© {currentYear}  Regina & Etanyeor's Wedding. All rights reserved.</p>
          <p className="mt-1">Made with love</p>
        </div>
      </div>
    </motion.footer>
  
  );
};

export default Footer;