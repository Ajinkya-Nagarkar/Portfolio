"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Icons/Logo";

const navLinks = [
    { name: "About", url: "/#about" },
    { name: "Experience", url: "/#experience" },
    { name: "Work", url: "/#work" },
    { name: "Contact", url: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            // The Navbar container slides down at 2.8s (just as the background clears)
            // This ensures the header is present, but the logo inside waits for its cue.
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className={`fixed top-0 w-full z-40 px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-navy/90 backdrop-blur-sm shadow-xl" : "bg-transparent"
                }`}
        >
            {/* THE LOGO FIX:
         We wrap the logo in a motion div.
         It stays invisible (opacity: 0) for 3.5s.
         At 3.5s (when the flying loader finishes), it turns to opacity: 1.
      */}
            <Link href="/" className="text-green hover:text-green-tint transition-colors">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0 }} // Instant switch
                >
                    <Logo className="w-10 h-10 md:w-12 md:h-12" />
                </motion.div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-mono text-lightest-slate">
                {navLinks.map((link, i) => (
                    <motion.li
                        key={i}
                        // Optional: Cascade the links in slightly after the logo
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.6 + (i * 0.1), duration: 0.3 }}
                    >
                        <Link href={link.url} className="hover:text-green transition-colors">
                            <span className="text-green mr-1">0{i + 1}.</span>
                            {link.name}
                        </Link>
                    </motion.li>
                ))}
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.0, duration: 0.3 }}
                >
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="border border-green text-green px-4 py-2 rounded hover:bg-green/10 transition-colors"
                    >
                        Resume
                    </a>
                </motion.li>
            </ul>
        </motion.nav>
    );
}