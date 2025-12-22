"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SocialSidebars() {
    return (
        <>
            {/* Left Side - Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="hidden md:flex flex-col fixed bottom-0 left-10 md:left-12 z-10 text-light-slate gap-6 items-center"
            >
                <ul className="flex flex-col gap-6">
                    <li>
                        <a
                            href={portfolioData.personal.socials.github}
                            className="hover:text-(--accent) hover:-translate-y-1 transition-all block"
                        >
                            <FiGithub size={20} />
                        </a>
                    </li>
                    <li>
                        <a
                            href={portfolioData.personal.socials.linkedin}
                            className="hover:text-(--accent) hover:-translate-y-1 transition-all block"
                        >
                            <FiLinkedin size={20} />
                        </a>
                    </li>
                    {/* Add more icons here if you have them */}
                </ul>
                {/* The Vertical Line */}
                <div className="w-px h-24 bg-light-slate"></div>
            </motion.div>

            {/* Right Side - Email */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="hidden md:flex flex-col fixed bottom-0 right-10 md:right-12 z-10 text-light-slate items-center gap-6"
            >
                <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="font-mono text-s hover:text-(--accent) hover:-translate-y-1 transition-all vertical-writing"
                    style={{ writingMode: "vertical-rl" }}
                >
                    {portfolioData.personal.email}
                </a>
                {/* The Vertical Line */}
                <div className="w-px h-24 bg-light-slate"></div>
            </motion.div>
        </>
    );
}