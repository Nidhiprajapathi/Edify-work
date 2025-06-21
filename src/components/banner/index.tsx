'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

const Banner: React.FC = () => {
  const router = useRouter();
  return (
    <header className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 px-6 py-8">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Edify Work
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="#" className="hover:text-indigo-600 transition duration-200">Our Services</a>
          <a href="#" className="hover:text-indigo-600 transition duration-200">Work</a>
          <a href="#" className="hover:text-indigo-600 transition duration-200">About</a>
        </nav>

        <button
          onClick={() => router.push('/contact')}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition duration-200"
        >
          Contact Us
        </button>
      </div>

      {/* Hero Text */}
      <div className="mt-32 flex flex-col items-center text-center space-y-6 px-4">
        <h3 className="text-lg md:text-xl text-gray-600 font-medium">
          <span className="font-semibold text-gray-900">We are</span> Edify Work
        </h3>
        <h1 className="text-5xl md:text-6xl font-extrabold flex flex-wrap justify-center items-center gap-4 leading-tight text-black">
          <span className="font-extrabold text-black">Your</span>

          {/* Creative with visual emphasis */}
          <span className="relative inline-block -rotate-[9deg]">
            {/* background without opacity */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white backdrop-blur-sm rounded-sm -z-10"></span>

            <span className="inline-block bg-[#5e3afc] text-white font-extrabold text-5xl px-10 py-4 rounded-full shadow-xl">
              <span className="bg-purple-300 text-white">Cr</span>eative
            </span>
          </span>

          <span className="font-extrabold text-black">Hub For</span>
        </h1>

        <h2 className="font-extrabold text-5xl md:text-6xl leading-tight text-black">
          Video Editing
        </h2>


        <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition duration-200">
          Talk to Us
        </button>
      </div>
    </header>
  );
};

export default Banner;
