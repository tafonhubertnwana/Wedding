"use client"

import { useState, useRef } from "react"; // Added useRef here
import { motion } from "framer-motion";
import { Allura } from 'next/font/google';
import { toast } from 'react-toastify';


const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function GuestForm() {
  const [attending, setAttending] = useState('');
  const [guests, setGuests] = useState(['']);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

 



  const handleGuestChange = (index, value) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };

  const addGuest = () => setGuests([...guests, '']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const res = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attending, ...formData, guests }),
    });
  
    const data = await res.json();
    setIsSubmitting(false); // stop loading state
  
    if (res.ok && data.emailSent) {
      toast.success('RSVP and email sent successfully!');
      setFormData({ name: '', email: '' });
      setAttending('');
      setGuests(['']);
    } else if (res.ok && !data.emailSent) {
      toast.warn('RSVP saved, but email failed to send.');
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div id="contact" className=" bg-gray-200 py-6 pt-10 w-full">
      <div className="max-w-6xl mx-auto bg-white shadow-xl overflow-hidden md:grid md:grid-cols-2 gap-10">
        <div className="p-10  mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className={`${allura.className} text-4xl sm:text-5xl md:text-5xl flex justify-center text-amber-500` }>
      
     
            Guest Form
          </motion.h2>
          <p className="text-center text-gray-600 mb-8">
  We are so excited to celebrate our special day with the people we love most. Kindly let us know if you'll be joining us by filling out the RSVP form below. Your presence means the world to us!
</p>


          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
      <p className="font-semibold">Will you be attending the wedding?</p>
      <div className="flex gap-4">
        <button type="button" className={`w-full py-2 border ${attending === 'yes' ? 'bg-purple-500 text-white' : 'bg-white'} transition-all`} onClick={() => setAttending("yes")}>Yes</button>
        <button type="button" className={`w-full py-2 border ${attending === 'no' ? 'bg-purple-500 text-white' : 'bg-white'} transition-all`} onClick={() => setAttending("no")}>No</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Your name*" className="border p-2 w-full" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email*" className="border p-2 w-full" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      </div>
      <p className="font-semibold">Who else is coming with you?</p>
      {guests.map((guest, index) => (
        <div key={index} className="flex gap-4 mb-2">
          <input type="text" placeholder="Guest name" value={guest} onChange={(e) => handleGuestChange(index, e.target.value)} className="border p-2 w-full" />
          {index === 0 && (
            <button type="button" className="border px-4 text-sm" onClick={addGuest}>Add guest</button>
          )}
        </div>
      ))}
     <button 
  type="submit" 
  className="bg-purple-500 text-white px-6 py-2 w-full flex items-center justify-center gap-2 disabled:opacity-50" 
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      Submitting...
    </>
  ) : (
    'Submit'
  )}
</button>

    </form>
        </div>
        <motion.div 
  initial={{ opacity: 0, x: 50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.6 }}
  className="relative max-w-4xl mx-auto"
>
  <video
    ref={videoRef}
    src="/images/couple.mp4"
    className={`object-cover w-full h-full rounded-lg ${isPlaying ? 'fixed inset-0 z-50 w-screen h-screen' : ''}`}
    onClick={togglePlay}
  />
  
  {!isPlaying && (
    <div className="absolute inset-0 flex items-center justify-center">
      <button 
        className="bg-white bg-opacity-70 rounded-full p-4 hover:bg-opacity-90 transition"
        onClick={() => {
          togglePlay();
          if (videoRef.current) {
            videoRef.current.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.66z" />
        </svg>
      </button>
    </div>
  )}
</motion.div>
      </div>
    </div>
  );
}