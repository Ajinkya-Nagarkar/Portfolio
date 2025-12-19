"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // This detects if you scrolled down to add a shadow
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#jobs" },
        { name: "Work", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/90 shadow-lg backdrop-blur-sm h-16" : "bg-transparent h-20"
                }`}
        >
            <div className="flex justify-between items-center h-full px-6 md:px-12 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="text-green text-2xl font-bold font-mono">
                    &lt;AN /&gt;
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lightest-slate hover:text-green text-sm font-mono transition-colors"
                            >
                                <span className="text-green mr-1">0{index + 1}.</span>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Resume Button */}
                    <a
                        href="/resume.pdf" // We will add the PDF file in the next step
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-green text-green px-4 py-2 rounded text-sm font-mono hover:bg-green/10 transition-colors"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
}