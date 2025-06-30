'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock, Shuffle, ClipboardList, Users,
  Paintbrush, Leaf, Repeat, DollarSign, BadgePercent,
  ShieldCheck, Monitor, Rocket, FileText, MessageCircle,
  Instagram, Linkedin,
} from 'lucide-react';

const services = [
  'Reaction Video Editing',
  'Podcast Video Editing',
  'Thumbnail Designing',
  'Shorts/Reel Video Editing',
  'Youtube Channel Management',
];

export default function ContactAndFaqPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('services');

  const tabs = [
    { id: 'services', label: 'Services' },
    { id: 'style', label: 'Style & Quality' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'copyright', label: 'Copyright & Platform Safety' },
    { id: 'communication', label: 'Onboarding & Communication' },
  ];

  const faqContent: Record<string, React.ReactNode> = {
    services: (
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {[
          { Icon: Clock, title: "How long does editing take?", desc: "Most edits take 2–4 working days depending on the video type, length, and complexity." },
          { Icon: Shuffle, title: "Do you repurpose content into Shorts, Reels, or TikToks?", desc: "Yes! We can turn long-form content into short-form clips optimized for every platform." },
          { Icon: ClipboardList, title: "What services do you offer?", desc: "We provide end-to-end editing for reaction videos, podcasts, Shorts, Reels, TikToks, thumbnails, SEO & channel management." },
          { Icon: Users, title: "Can you handle Patreon or members-only content?", desc: "Absolutely. We offer Patreon watchalong edits and members-only video versions for a small additional fee." },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    style: (
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {[
          { Icon: Paintbrush, title: "Can you match my editing style?", desc: "Yes. We match any style, or even another creator’s style. Custom plans available." },
          { Icon: Leaf, title: "What if I’m a new creator?", desc: "No problem! We work with creators at every stage." },
          { Icon: Repeat, title: "Do you offer revisions?", desc: "Yes. Two complimentary revisions included. Extra revisions may have a small fee." },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    pricing: (
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {[
          { Icon: DollarSign, title: "How much does editing cost?", desc: "Depends on content type and complexity. We offer both monthly retainers and per-project quotes." },
          { Icon: BadgePercent, title: "Do you offer bulk discounts?", desc: "Yes! Discounted rates for creators committing to higher volume." },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    copyright: (
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {[
          { Icon: ShieldCheck, title: "Are the edits copyright-safe for YouTube?", desc: "Yes. We use copyright-safe editing techniques. If a claim appears, we help you resolve it at no extra charge." },
          { Icon: Monitor, title: "Will you provide the movie/show footage for my reaction?", desc: "No. You’ll need to provide both the reaction and original footage." },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    communication: (
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {[
          { Icon: Rocket, title: "How does onboarding work?", desc: "We’ll create a shared Dropbox folder and add you to a dedicated ClickUp workspace with your assigned team." },
          { Icon: FileText, title: "What file formats do you accept?", desc: "We prefer MP4 and MOV but can work with most formats compatible with our workflow." },
          { Icon: MessageCircle, title: "How will I communicate with Praper?", desc: "All communication happens via ClickUp. You'll have direct access to your editor, PM, and leadership team." },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
    
    {/* Left: Title */}
    <div className="text-2xl font-bold text-red-700">Edify Work</div>

    {/* Center: Nav links */}
    <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-xl">
      <Link href="/" className="text-gray-700 hover:text-pink-500">Home</Link>
      <Link href="/about" className="text-gray-700 hover:text-pink-500">About</Link>
      <Link href="/services" className="text-gray-700 hover:text-pink-500">Services</Link>
      <Link href="/joinus" className="text-gray-700 hover:text-pink-500">Join Us</Link>
      <Link href="/faqs" className="text-gray-700 hover:text-pink-500">FAQs</Link>
    </nav>

    {/* Right: Get in Touch button */}
    <Link href="/contact" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full">
      Get in Touch →
    </Link>
    

  </div>
</header>




      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Frequently Asked Questions</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-150 ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'border-black text-gray-800 hover:bg-gray-100'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>{faqContent[activeTab]}</div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-red-200 my-12">
        <h2 className="text-3xl font-extrabold mb-6">
          Tell us what <span className="relative after:absolute after:left-0 after:bottom-1 after:h-2 after:w-full after:bg-pink-300 after:-z-10">you need</span>
        </h2>

        <form className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Your Name/Company Name *</label>
              <input type="text" placeholder="Enter Your Name/Company Name" className="w-full border-b focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Email *</label>
              <input type="email" placeholder="Enter Your Email" className="w-full border-b focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">YouTube Channel Link *</label>
              <input type="text" placeholder="Enter Link Here" className="w-full border-b focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">About Your Project *</label>
            <textarea placeholder="Tell Us About Your Project" className="w-full border-b focus:outline-none"></textarea>
          </div>

          <div>
            <p className="font-semibold mb-2">I Need *</p>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full border transition ${selectedService === service
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'border-gray-700 text-gray-800'
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <section className="bg-[#f9fbff] py-10 pt-5 pl-30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Logo and Description */}
          <div className="flex flex-col justify-between ">
            <span className="text-xl font-bold text-pink-700">Edify Work</span>
            <p className="text-sm text-gray-600 max-w-xs">
              Edify is a post-production & creative studio based in India. Proudly trusted by some of the internet’s top creators.
            </p>
          </div>

          {/* Center: Useful Links */}
          <div>
            <h4 className="text-base font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:underline">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms</Link></li>
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h4 className="text-base font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-gray-700">
              <a href="https://www.instagram.com/edifywork__/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="text-pink-600 hover:text-pink-800" />
              </a>
              <a href="https://www.linkedin.com/company/edifywork/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
