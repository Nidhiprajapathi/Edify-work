'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, BadgeCheck, TrendingUp, PlayCircle } from 'lucide-react';
import Customvideo from './Customvideo/video';
import TypewriterText from './TypewriterText/typewriter';
import CoreServices from './CoreServices/coreservices';
import Specialservices from './Specialservices/specialservices';

const Index = () => {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <div>
      <header className="w-full bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg">
        {/* Main Navigation */}
        <div className="w-full bg-white/95 backdrop-blur-md shadow-xl z-20 relative px-5 top-0 border-b border-gray-100">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-5">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-gradient-to-r from-pink-700 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">Edify Work</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/testimonial', label: 'Testimonial' },
                { href: '/joinus', label: 'Join Us' }
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group ${
                    pathname === href
                      ? 'text-pink-700 font-semibold'
                      : 'text-gray-700 hover:text-pink-700'
                  }`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-700 to-purple-600 transform origin-left transition-all duration-300 ${
                    pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917550138744"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
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
                <span className="hidden lg:inline">WhatsApp</span>
              </a>

              {/* Get Quote Button */}
              <button className="flex items-center bg-gradient-to-r from-pink-700 to-purple-600 hover:from-pink-800 hover:to-purple-700 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Get Quote
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
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
      {/* Core services section */}
      <CoreServices />


      {/* Special services section */}
      <Specialservices />

      {/* Proven Results Section */}
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                Proven Results
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Numbers that speak for our commitment to delivering exceptional creative solutions
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Views Reached */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                    1M+
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Views Reached
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  Across all platforms
                </p>
              </div>
            </div>

            {/* Followers Grown */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                    20K+
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Followers Grown
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  For our clients
                </p>
              </div>
            </div>

            {/* Brands Served */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l-.75 18h-13.5L4.5 3z" />
                  </svg>
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                    50+
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Brands Served
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  And counting
                </p>
              </div>
            </div>

            {/* Average Growth */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                    300%
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Avg Growth
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  In engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
