'use client';

import {
    ChevronDown,
    ArrowRight,
    Instagram,
    Linkedin,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const About: React.FC = () => {
    const pathname = usePathname();
    const [selectedService, setSelectedService] = useState('');
    const services = [
        'YouTube Video Editing',
        'Short Video Editing',
        'Thumbnail Design',
        'Content Strategy',
        'Channel Management',
    ];

    return (
        <>
            {/* Header Section */}
            <header className="w-full bg-pink-600">
                <div className="w-full bg-gradient-to-r from-pink-700 to-purple-600 text-white text-sm text-center pb-4 pt-1 font-normal">
                    <a
                        href="/careers"
                        className="hover:underline flex justify-center items-center gap-1"
                    >
                        We're Hiring! <span>Apply Now</span>
                        <ArrowRight size={14} />
                    </a>
                </div>

                <div className="w-full bg-white shadow-md mt-[-12px] rounded-t-3xl z-10 relative px-5">
                    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-pink-700">Edify Work</span>
                        </div>
                        <nav className="flex items-center gap-8">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About' },
                                { href: '/join', label: 'Join Us' },
                                { href: '/faq', label: 'FAQs' },
                            ].map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className={`${pathname === href
                                        ? 'font-semibold text-black'
                                        : 'text-gray-700 hover:text-black'
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                            <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer">
                                <span>Services</span>
                                <ChevronDown size={16} />
                            </div>
                        </nav>

                        <button className="flex items-center bg-gradient-to-r from-pink-700 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-colors gap-2">
                            Get in Touch
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Intro Section */}
            <section className="flex bg-gray-50 py-60 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
                            Built to support modern creators <br /> with care and consistency.
                        </h1>
                        <p className="text-lg text-gray-700">
                            Crafting top-tier content at scale takes more than talent — it takes a team.
                            With 75+ creative pros, Edify Work is your backstage crew, making sure every
                            frame, post, and plan is handled with care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { count: '2300+', label: 'YouTube Videos Edited' },
                            { count: '4060+', label: 'Short Videos Edited' },
                            { count: '12,084+', label: 'Hours of Content Edited' },
                            { count: '5,325+', label: 'Thumbnails Edited' },
                        ].map(({ count, label }) => (
                            <div key={label}>
                                <p className="text-4xl font-bold text-[#0B1F3A]">{count}</p>
                                <p className="mt-2 text-lg text-[#0B1F3A] opacity-80">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="px-6 md:px-20 py-20 bg-black">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                        Meet the{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">team</span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-300 z-0"></span>
                        </span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-white text-base md:text-lg leading-relaxed">
                        Edify began as a one-person vision in our founder Raj's home. What started as a solo mission has grown into a powerhouse team of 75+
                        top-tier creatives, united by one obsession: helping the world’s leading creators scale, shine, and succeed.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                    {[
                        {
                            name: 'Raj Prajapat',
                            role: 'Co-founder & CEO',
                            image: '/Creator/IMG_2818 (3).PNG',
                            insta: '_djraj',
                            linkedin: 'raj-parjapat-71b1b41b2',
                            bio:
                                "Raj started Edify at just 19 — not with a blueprint, but with ambition and Adobe. From solo video editor to CEO, he’s built a creative powerhouse while staying a mentor, not a boss, to the team.",
                        },
                        {
                            name: 'Vikash Rajpurohit',
                            role: 'Co-founder & CMO',
                            image: '/Creator/IMG_2080.png',
                            insta: 'vickky_rajj',
                            linkedin: 'vikash-rajpurohit-2571761b9',
                            bio:
                                "The quiet force behind Edify’s early growth. From building the foundation to shaping creative strategy, Vikash blends vision with execution — helping Edify scale with purpose.",
                        },
                        {
                            name: 'Himanshu Prajapati',
                            role: 'Co-founder & COO',
                            image: '/Creator/IMG_2086.png',
                            insta: 'himanshu_prajapati_45',
                            linkedin:
                                'himanshu-prajapati-24689a250/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                            bio:
                                "From building systems to managing people, Himanshu has shaped Edify’s core. As Co-Founder and COO, he leads day-to-day ops with precision — keeping 75+ creatives moving in sync.",
                        },
                    ].map((member) => (
                        <div className="bg-white rounded-xl shadow-md p-6" key={member.name}>
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-lg mb-4 object-cover w-full h-60"
                            />
                            <h3 className="text-xl font-bold text-[#0B1F3A]">{member.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                            <div className="flex gap-3 mb-3">
                                <a href={`https://www.instagram.com/${member.insta}/`} target="_blank" rel="noopener noreferrer">
                                    <Instagram size={20} className="text-pink-600 hover:text-pink-800" />
                                </a>
                                <a href={`https://www.linkedin.com/in/${member.linkedin}/`} target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
                                </a>
                            </div>
                            <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <div className='flex pt-15  mx-auto w-7xl space-x-6 py-20 pl-50 ' >
                <section className="py-20 p-6 bg-white rounded-xl shadow-md border border-b-4 border-b-pink-600 pt-14  ">
                    <h2 className="text-3xl font-extrabold mb-10 relative">
                        Work with our{' '}
                        <span className="relative after:absolute after:left-0 after:bottom-1 after:h-2 after:w-full after:bg-pink-300 after:-z-10">
                            A-team.
                        </span>
                    </h2>

                    <form className="space-y-12">
                        <div className="grid md:grid-cols-3 gap-4 space-y-6 ">
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
                            <textarea
                                placeholder="Tell Us About Your Project"
                                className="w-full border-b focus:outline-none"
                            ></textarea>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">I Need *</p>
                            <div className="flex flex-wrap gap-2">
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => setSelectedService(service)}
                                        className={`px-4 py-2 rounded-full border text-sm transition ${selectedService === service
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
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="/refund" className="hover:underline">Refund Policy</a></li>
                            <li><a href="/terms" className="hover:underline">Terms</a></li>
                        </ul>
                    </div>

                    {/* Right: Social Links */}
                    <div>
                        <h4 className="text-base font-semibold mb-2">Follow Us</h4>
                        <div className="flex space-x-4 text-gray-700">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/edifywork__/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={20} className="text-pink-600 hover:text-pink-800" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/edifywork/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>




        </>
    );
};

export default About;
