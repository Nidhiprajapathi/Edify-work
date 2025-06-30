'use client'; // Only needed for Next.js if using hooks like usePathname()

import { ArrowRight,ScissorsSquare,
  Palette,
  Mic2,
  Share2, } from 'lucide-react';
import { useEffect, useState } from 'react';

const extraServices = [
  {
    title: 'Video Editing',
    desc: 'Clean cuts, smooth transitions, and powerful storytelling for YouTube & Reels.',
    icon: <ScissorsSquare className="w-6 h-6 text-purple-400" />,
    bg: 'bg-rose-900/30',
  },
  {
    title: 'Graphic Designing',
    desc: 'Thumbnails, branding kits, and custom social media graphics.',
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    bg: 'bg-amber-900/30',
  },
  {
    title: 'Podcast Editing',
    desc: 'Noise removal, sound mixing, intros/outros and platform-ready exports.',
    icon: <Mic2 className="w-6 h-6 text-purple-400" />,
    bg: 'bg-indigo-900/30',
  },
  {
    title: 'Social Media Management',
    desc: 'Posting schedules, audience engagement, and performance insights.',
    icon: <Share2 className="w-6 h-6 text-purple-400" />,
    bg: 'bg-lime-900/30',
  },
];


const ServicesPage = () => {
  const [pathname, setPathname] = useState('/service');

  useEffect(() => {
    setPathname(window.location.pathname); // For client-side pathname detection
  }, []);

  return (
    <>
      {/* Header Section */}
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

      {/* Services Section */}
      <section className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-16 items-center">
          <div className="text-center flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              What We Offer
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              We blend creativity, strategy, and storytelling to bring your brand to life. Explore the full range of our services below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {extraServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 text-center transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className={`p-3 rounded-xl w-fit mx-auto mb-4 ${service.bg}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

