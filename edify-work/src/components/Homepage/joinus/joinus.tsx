'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const JoinPage: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white shadow-md z-20 sticky top-0">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-pink-700">Edify Work</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/service', label: 'Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/joinus', label: 'Join us' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-black font-semibold'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:scale-105 transition-transform gap-2">
            Get Quote
            <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* Hero with Background */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white px-6"
        style={{ backgroundImage: "url('/Creator/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0" />
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Join the team behind <br /> the internet’s favorite creators.
          </h1>
          <p className="text-lg text-gray-200">
            We’re growing fast — and always looking for editors, designers, and strategists who love creating.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why work at Edify?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: '🌍',
              title: 'Remote & Flexible',
              desc: 'Work from anywhere. Anytime.',
            },
            {
              icon: '🔥',
              title: 'Top Creators Only',
              desc: 'Make content millions love to watch.',
            },
            {
              icon: '🤝',
              title: 'No Office Politics',
              desc: 'Just good people doing great work.',
            },
          ].map((perk) => (
            <div
              key={perk.title}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{perk.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
              <p className="text-gray-600">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="bg-[#f9f9fb] py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Open Roles</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: 'Video Editing', type: 'Full-time', location: 'Remote' },
            { title: 'Graphic Designing', type: 'Part-time', location: 'Remote' },
            { title: 'Podcast Editing', type: 'Full-time', location: 'Remote' },
          ].map((role) => (
            <div
              key={role.title}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600 mb-1">Type: {role.type}</p>
              <p className="text-sm text-gray-600 mb-4">Location: {role.location}</p>
              <a
                href="mailto:hello@edify.work?subject=Applying for Edify Role"
                className="text-pink-600 font-medium flex items-center gap-2 hover:underline"
              >
                Apply Now <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA with Background */}
      <section
        className="relative bg-cover bg-center text-white py-24 px-6 md:px-20"
        style={{ backgroundImage: "url('/assets/cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Don’t see your role? Pitch us anyway.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you’re passionate about content, send us your portfolio and a short intro.
          </p>
          <a
            href="mailto:hello@edify.work"
            className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Send Your Portfolio <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
};

export default JoinPage;
