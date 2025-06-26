'use client';

import React from 'react';
import { ChevronDown, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const About: React.FC = () => {
    const pathname = usePathname();

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
            <section className="flex bg-gray-50 py-60 pl-30">
                <div className=" flex flex-col md:flex-row items-start gap-12">
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
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

                        <div>
                            <p className="text-4xl font-bold text-[#0B1F3A]">2300+</p>
                            <p className="mt-2 text-lg text-[#0B1F3A] opacity-80">YouTube Videos Edited</p>
                        </div>

                        <div>
                            <p className="text-4xl font-bold text-[#0B1F3A]">4060+</p>
                            <p className="mt-2 text-lg text-[#0B1F3A] opacity-80">Short Videos Edited</p>
                        </div>

                        <div>
                            <p className="text-4xl font-bold text-[#0B1F3A]">12,084+</p>
                            <p className="mt-2 text-lg text-[#0B1F3A] opacity-80">Hours of Content Edited</p>
                        </div>

                        <div>
                            <p className="text-4xl font-bold text-[#0B1F3A]">5,325+</p>
                            <p className="mt-2 text-lg text-[#0B1F3A] opacity-80">Thumbnails Edited</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Team Intro */}
            <section className="px-6 md:px-20 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Meet the{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">team</span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-300 z-0"></span>
                        </span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
                        Edify began as a one-person vision in our founder Pratham’s home. What started as a solo mission has grown into a powerhouse team of 75+
                        top-tier creatives, united by one obsession: helping the world’s leading creators scale, shine, and succeed.
                    </p>
                </div>


                {/* Team Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                    {/* Team Member 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <img
                            src="/Creator/IMG_2818 (3).PNG"
                            alt="Raj Prajapat"
                            className="rounded-lg mb-4 object-cover w-full h-60"
                        />
                        <h3 className="text-xl font-bold text-[#0B1F3A]">Raj Prajapat</h3>
                        <p className="text-sm text-gray-600 mb-2">Founder & CEO</p>
                        <div className="flex gap-3 mb-3">
                            <a href="https://www.instagram.com/_djraj/" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} className="text-pink-600 hover:text-pink-800" />
                            </a>
                            <a href="https://www.linkedin.com/in/raj-parjapat-71b1b41b2/" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
                            </a>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Raj started Edify at just 19 — not with a blueprint, but with ambition and Adobe. From solo video editor to CEO, he’s built a creative powerhouse while staying a mentor, not a boss, to the team.                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <img
                            src="/Creator/IMG_2080.png"
                            alt="Vikash Rajpurohit"
                            className="rounded-lg mb-4 object-cover w-full h-60"
                        />
                        <h3 className="text-xl font-bold text-[#0B1F3A]">Vikash Rajpurohit</h3>
                        <p className="text-sm text-gray-600 mb-2">Co-Founder (& more)</p>
                        <div className="flex gap-3 mb-3">
                            <a href="https://www.instagram.com/vickky_rajj/" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} className="text-pink-600 hover:text-pink-800" />
                            </a>
                            <a href="https://www.linkedin.com/in/vikash-rajpurohit-2571761b9/" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
                            </a>
                        </div>
                        <p className="text-gray-600 text-sm">
                            The quiet force behind Edify’s early growth. From building the foundation to shaping creative strategy, Vikash blends vision with execution — helping Edify scale with purpose.                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <img
                            src="/Creator/IMG_2086.png"
                            alt="Himanshu Prajapat"
                            className="rounded-lg mb-4 object-cover w-full h-60"
                        />
                        <h3 className="text-xl font-bold text-[#0B1F3A]">Himanshu Prajapati</h3>
                        <p className="text-sm text-gray-600 mb-2">Co-Founder</p>
                        <div className="flex gap-3 mb-3">
                            <a href="https://www.instagram.com/himanshu_prajapati_45/" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} className="text-pink-600 hover:text-pink-800" />
                            </a>
                            <a href="https://www.linkedin.com/in/himanshu-prajapati-24689a250/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
                            </a>
                        </div>
                        <p className="text-gray-600 text-sm">
                            From building systems to managing people, Himanshu has shaped Edify’s core. As Co-Founder and COO, he leads day-to-day ops with precision — keeping 75+ creatives moving in sync.                        </p>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default About;
