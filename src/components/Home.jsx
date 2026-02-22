import React, { useState, useEffect } from 'react';
import { Layers, Download, Copy, Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf';

const experiences = [
    {
        company: "Ernst & Young",
        role: "Assurance Audit Analyst",
        period: "01/2025 – 05/2025",
        location: "Chennai, Tamil Nadu",
        description: [
            "Collaborated with the audit team to perform financial reconciliation by analyzing client transaction data over specified periods.",
            "Used Alteryx to process and transform ledger and statement data.",
            "Validated reconciliation by comparing net amounts with BRS differences.",
            "Supported dashboard creation using Power BI for reporting insights."
        ]
    },
    {
        company: "Cloco Solutions",
        role: "FullStack Developer Intern",
        period: "06/2023 – 11/2023",
        location: "Coimbatore, Tamil Nadu",
        description: [
            "Developed an efficient EV charge app admin dashboard using Flutter and Firebase, enhancing usability and data speed by 25%.",
            "Integrated Node.js backend with Firebase for real time data handling.",
            "Collaborated in Agile sprints, improving task completion efficiency by 15%",
            "Quickly adapted to new technologies."
        ]
    }
];

import GuestBook from './GuestBook';

function Home() {
    const [time, setTime] = useState(new Date());
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Format time as HH:MM AM/PM
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    const handleCopy = () => {
        navigator.clipboard.writeText("kaushal1619s@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-6rem)] relative">
                <div className="text-center z-10">
                    <h1 className="text-[12vw] sm:text-[15vw] font-display font-medium leading-none tracking-tight text-white">
                        KAUSHAL
                    </h1>

                    <div className="mt-4 space-y-2">
                        <p className="text-neutral-400 font-sans tracking-[0.2em] text-sm sm:text-base uppercase">
                            I DESIGN AND BUILD PRODUCTS THAT
                        </p>
                        <p className="font-serif italic text-3xl sm:text-4xl text-white">
                            deliver real impact.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 hidden sm:block text-right">
                    <div className="flex justify-end items-center gap-2 text-blue-500 mb-1">
                        <Layers size={16} />
                    </div>
                    <p className="text-xs font-sans text-neutral-300 font-medium">
                        FULL STACK DEV & DESIGNER<br /> AI ENGINEER
                    </p>
                </div>
            </div>

            {/* Experience Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                <h2 className="text-3xl font-display font-stretch-95% text-white mb-10 sm:mb-16 text-center">PROFESSIONAL EXPERIENCE</h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 space-y-12 font-medium">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-6 sm:pl-12"
                        >
                            {/* Desktop Date */}
                            <div className="hidden md:block md:absolute md:right-[calc(100%+2rem)] md:text-right md:top-0.5 w-48">
                                <span className="block text-white font-sans text-sm tracking-widest uppercase">{exp.period}</span>
                                <span className="block text-neutral-500 text-xs mt-1">{exp.location}</span>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-neutral-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="group">
                                {/* Mobile Date */}
                                <div className="md:hidden mb-2">
                                    <span className="text-blue-400 font-medium text-xs tracking-widest uppercase">{exp.period}</span>
                                </div>

                                <h3 className="text-xl sm:text-2xl text-white font-medium group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                                <h4 className="text-lg sm:text-xl text-neutral-400 font-serif italic mb-4">{exp.company}</h4>

                                <ul className="space-y-3 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Bottom Section: Profile & Connect */}
            <div className="max-w-2xl mx-auto px-6 py-10 pt-16 sm:pt-24">
                <h2 className="font-serif font-stretch-50% bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center text-5xl">Connect With Me</h2>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-6 p-6 pb-24'>

                {/* Card 1: Profile & Resume */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className='relative w-full max-w-[420px] rounded-3xl bg-neutral-900/50 border border-white/10 shadow-2xl p-8 backdrop-blur-sm'
                >
                    {/* Name & Info */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-serif text-white">
                            Kaushal <span className="italic font-light text-gray-400">S</span>
                        </h1>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-400 tracking-wider">
                                📍 COIMBATORE, TAMIL NADU
                            </p>
                            <p className="text-sm text-gray-500 font-mono">
                                🕒 {formattedTime} IST
                            </p>
                        </div>
                    </div>

                    {/* Resume Button */}
                    <a
                        href={resume}
                        download="Kaushal_S_Resume.pdf"
                        className="mt-8 flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl transition-all group cursor-pointer"
                    >
                        <Download size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium tracking-wide">DOWNLOAD RESUME</span>
                    </a>
                </motion.div>

                {/* Card 2: Let's Connect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='relative w-full max-w-[420px] rounded-3xl bg-neutral-900/50 border border-white/10 shadow-2xl p-8 backdrop-blur-sm flex flex-col justify-between'
                >
                    <div>
                        <h2 className="text-2xl font-display font-medium text-white mb-2">Let's Connect</h2>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={handleCopy}
                            className="flex items-center justify-between w-full bg-black/40 border border-white/10 p-4 rounded-xl hover:border-white/20 transition-all group cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 text-neutral-400">
                                    <Mail size={20} />
                                </div>
                                <span className="text-neutral-300 text-sm font-mono">kaushal1619s@gmail.com</span>
                            </div>
                            <div className="text-neutral-400 group-hover:text-white transition-colors">
                                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </div>
                        </button>
                    </div>
                </motion.div>

            </div>

            <GuestBook />
        </div>
    );
}

export default Home;