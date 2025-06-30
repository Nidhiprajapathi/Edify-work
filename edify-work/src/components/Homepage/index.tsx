'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

            {/* CTA Button */}
            <button className="flex items-center bg-gradient-to-r from-pink-700 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-colors gap-2">
              Get Quote
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;
