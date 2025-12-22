"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="max-w-4xl mx-auto py-24 px-6 md:px-10 text-(--text-primary)"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-(--accent) font-mono text-xl md:text-2xl font-bold">
                    01.
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-(--text-secondary)">
                    About Me
                </h2>
                <div className="h-px bg-lightest-navy grow ml-4 max-w-xs"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Column: Bio */}
                <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
                    <p className="whitespace-pre-line">{portfolioData.personal.about}</p>

                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                        {portfolioData.skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-(--accent)">▹</span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column: Education Cards */}
                <div className="relative group">
                    <div className="border-l-2 border-(--accent) pl-6 space-y-8">
                        {portfolioData.education.map((edu, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-7.25 top-1 h-3 w-3 rounded-full bg-green"></span>
                                <h3 className="text-(--text-secondary) font-bold text-lg">
                                    {edu.school}
                                </h3>
                                <p className="text-sm font-mono text-(--accent) mb-1">{edu.degree}</p>
                                <p className="text-xs uppercase tracking-widest text-(--text-primary)/60">
                                    {edu.date}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}