'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, BadgeCheck, TrendingUp, PlayCircle } from 'lucide-react';
import Customvideo from '../Customvideo/video';
import TypewriterText from './TypewriterText/typewriter';

const Index = () => {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <div>
      <header className="w-full bg-pink-600">
        {/* Main Navigation */}
        <div className="w-full bg-white shadow-md z-10 relative px-5">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-pink-700">Edify Work</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/testimonial', label: 'Testimonial' },
                { href: '/join us', label: 'Join Us' }
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`${
                    pathname === href
                      ? 'font-semibold text-black'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917550138744"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-full transition gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.197.297-.769.967-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.134.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.672-1.611-.922-2.211-.242-.579-.487-.5-.672-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.412.248-.695.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zm-5.421 7.545h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.646-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.823 9.823 0 016.96 2.888 9.823 9.823 0 012.888 6.957c-.003 5.45-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .163 5.332.16 11.887a11.82 11.82 0 001.62 6.006L0 24l6.236-1.634a11.83 11.83 0 005.782 1.475h.005c6.555 0 11.887-5.332 11.89-11.887a11.82 11.82 0 00-3.503-8.423z" />
                </svg>
                WhatsApp
              </a>

              {/* Get Quote Button */}
              <button className="flex items-center bg-gradient-to-r from-pink-700 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-colors gap-2">
                Get Quote
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="w-full h-screen bg-black text-white flex flex-col pt-15 items-center">
        <div className="text-center w-full px-4 flex flex-col items-center space-y-2">
          {/* Heading */}
          <h1 className="text-3xl md:text-3xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
              WE ARE EDIFYWORK
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
              YOUR CREATIVE HUB FOR EVERYTHING
            </span>
          </h1>

          {/* Typewriter Effect */}
          <TypewriterText />

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 font-normal text-zinc-300 mt-2">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-purple-500 w-4 h-4" />
              <span>20+ Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-purple-500 w-4 h-4" />
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <PlayCircle className="text-purple-500 w-4 h-4" />
              <span>1M+ Views Generated</span>
            </div>
          </div>

          {/* Video directly below stats */}
          <Customvideo />
        </div>
      </section>
      <section>
      </section>
    </div>
  );
};

export default Index;
