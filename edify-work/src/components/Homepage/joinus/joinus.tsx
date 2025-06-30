'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const JoinPage: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <header className="w-full bg-pink-600">
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

      {/* Main */}
      <main className="min-h-screen bg-white text-[#0B1F3A]">
        {/* Hero */}
        <section className="px-6 md:px-20 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Join the team behind <br /> the internet’s favorite creators.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Edify is growing. We’re on the lookout for editors, strategists, designers, and thinkers
            who love content and move fast. If that sounds like you — let’s talk.
          </p>
        </section>

        {/* Perks */}
        <section className="bg-gray-50 py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Why work at Edify?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { title: 'Remote & Flexible', desc: 'Work from anywhere. Anytime.' },
              { title: 'Create for Top Creators', desc: 'Make content that millions actually watch.' },
              { title: 'No Office Politics', desc: 'Just good people doing great work together.' },
            ].map((perk) => (
              <div key={perk.title} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section className="py-20 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Open Roles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'YouTube Video Editor', type: 'Full-time', location: 'Remote' },
              { title: 'Thumbnail Designer', type: 'Part-time', location: 'Remote' },
              { title: 'Content Strategist', type: 'Full-time', location: 'Remote' },
            ].map((role) => (
              <div key={role.title} className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
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

        {/* CTA */}
        <section className="bg-black text-white text-center py-20 px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Don’t see your role? Pitch us anyway.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            We’re always excited to meet creative talent. If you’re passionate about content and want to work with us,
            send your portfolio and a short intro.
          </p>
          <a
            href="mailto:hello@edify.work"
            className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Send Your Portfolio <ArrowRight size={18} className="ml-2" />
          </a>
        </section>
      </main>
    </>
  );
};

export default JoinPage;
