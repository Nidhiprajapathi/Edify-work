'use client';

import React, { useState } from 'react';
import {
  Clock, Shuffle, ClipboardList, Users, Paintbrush, Leaf, Repeat,
  DollarSign, BadgePercent, ShieldCheck, Monitor, Rocket, FileText, MessageCircle,
} from 'lucide-react';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const tabs = [
    { id: 'services', label: 'Services' },
    { id: 'style', label: 'Style & Quality' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'copyright', label: 'Copyright & Platform Safety' },
    { id: 'communication', label: 'Onboarding & Communication' },
  ];

  const faqContent: Record<string, React.ReactNode> = {
    services: (
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[{ icon: Clock, title: "How long does editing take?", text: "Most edits take 2–4 working days..." },
        { icon: Shuffle, title: "Do you repurpose content?", text: "Yes! We can turn long-form into short-form clips..." },
        { icon: ClipboardList, title: "What services do you offer?", text: "We provide editing for YouTube, Reels, TikToks..." },
        { icon: Users, title: "Can you handle Patreon content?", text: "Yes, we offer members-only and Patreon edits..." }]
          .map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="w-6 h-6 text-gray-700 mt-1" />
              <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-gray-700">{text}</p></div>
            </div>
          ))}
      </div>
    ),
    style: (
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[{ icon: Paintbrush, title: "Match my style?", text: "Yes. We can match your editing style or another creator's..." },
        { icon: Leaf, title: "New creator?", text: "No problem. We help new creators grow." },
        { icon: Repeat, title: "Do you offer revisions?", text: "Yes, 2 free revisions per project..." }]
          .map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="w-6 h-6 text-gray-700 mt-1" />
              <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-gray-700">{text}</p></div>
            </div>
          ))}
      </div>
    ),
    pricing: (
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[{ icon: DollarSign, title: "Cost?", text: "Pricing depends on complexity. Contact for quote." },
        { icon: BadgePercent, title: "Bulk discounts?", text: "Yes! Special rates for bulk orders." }]
          .map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="w-6 h-6 text-gray-700 mt-1" />
              <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-gray-700">{text}</p></div>
            </div>
          ))}
      </div>
    ),
    copyright: (
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[{ icon: ShieldCheck, title: "Copyright-safe?", text: "Yes. We use copyright-safe editing methods." },
        { icon: Monitor, title: "Footage source?", text: "You need to provide both reaction and original footage." }]
          .map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="w-6 h-6 text-gray-700 mt-1" />
              <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-gray-700">{text}</p></div>
            </div>
          ))}
      </div>
    ),
    communication: (
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[{ icon: Rocket, title: "Onboarding?", text: "We setup Dropbox and ClickUp for you." },
        { icon: FileText, title: "File formats?", text: "MP4, MOV, and most popular formats accepted." },
        { icon: MessageCircle, title: "Communication?", text: "All project chat happens inside ClickUp." }]
          .map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="w-6 h-6 text-gray-700 mt-1" />
              <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-gray-700">{text}</p></div>
            </div>
          ))}
      </div>
    ),
  };

  const services = [
    'Reaction Video Editing',
    'Podcast Video Editing',
    'Thumbnail Designing',
    'Shorts/Reel Video Editing',
    'Youtube Channel Management',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-red-600">Edify Work</div>
          <nav className="hidden md:flex space-x-6 text-sm">
            {["Home", "About", "Services", "Join Us", "FAQs"].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-red-500">{item}</a>
            ))}
            <a href="#" className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">Get in Touch →</a>
          </nav>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8">Frequently Asked Questions</h1>
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'border-black text-gray-800 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{faqContent[activeTab]}</div>
      </section>

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto p-6 mb-12 bg-white rounded-xl shadow-md border border-red-200">
        <h2 className="text-3xl font-extrabold mb-6 relative">
          Tell us what <span className="relative after:absolute after:left-0 after:bottom-1 after:h-2 after:w-full after:bg-pink-300 after:-z-10">you need</span>
        </h2>

        <form className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Your Name/Company Name *</label>
              <input type="text" placeholder="Enter Your Name" className="w-full border-b focus:outline-none" />
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
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    selectedService === service
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'border-gray-700 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
