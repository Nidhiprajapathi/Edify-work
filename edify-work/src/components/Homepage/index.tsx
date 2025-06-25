import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <>
      <header className="w-full bg-pink-600">
        {/* Top Gradient Bar */}
        <div className="w-full bg-gradient-to-r from-pink-700 to-purple-600 text-white text-sm text-center pb-4 pt-1 font-normal">
          <a href="/careers" className="hover:underline flex justify-center items-center gap-1">
            We're Hiring! <span>Apply Now</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Navbar */}
        <div className="w-full bg-white shadow-md mt-[-12px] rounded-t-3xl z-10 relative px-5">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-pink-700">Edify Work</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <a href="#" className="font-semibold text-black">Home</a>
              <a href="#" className="text-gray-700 hover:text-black">About</a>
              <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer">
                <span>Services</span>
                <ChevronDown size={16} />
              </div>
              <a href="#" className="text-gray-700 hover:text-black">Join Us</a>
              <a href="#" className="text-gray-700 hover:text-black">FAQs</a>
            </nav>

            {/* CTA */}
            <button className="flex items-center bg-gradient-to-r from-pink-700 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-colors gap-2">
              Get in Touch
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white pt-8 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Left */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Helping the <span className="text-red-600">world's coolest</span><br />
              <span className="text-blue-900">creators create.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              You love being in front of the camera. We love the ‘boring’ back-end.
              Let us nail that for you, and watch your numbers go to the mooooon!
            </p>
            <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2">
              Get in Touch
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Image Right */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Creator/raju_bhai-removebg-preview.png"
              alt="Creator"
              className="max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
