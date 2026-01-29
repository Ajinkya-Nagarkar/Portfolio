"use client";
import React, { useState } from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section
            id="experience"
            className="max-w-4xl mx-auto py-24 px-6 md:px-10 text-(--text-primary)"
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-(--accent)">
                    Where I've Worked
                </h2>
                <div className="h-px bg-lightest-navy grow ml-4 max-w-xs"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Tab List (Left Side) */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-(--accent) min-w-35">
                    {portfolioData.experience.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`text-left px-4 py-3 font-mono text-sm transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-0.5 md:mb-0 md:-ml-0.5 ${activeTab === index
                                    ? "text-(--accent) border-(--accent) bg-green/5"
                                    : "text-(--text-primary) border-transparent hover:bg-(--bg-primary) hover:text-(--accent)"
                                }`}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                {/* Job Content (Right Side) */}
                <div className="flex-1 min-h-75">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-(--text-secondary)">
                            {portfolioData.experience[activeTab].title}{" "}
                            <span className="text-(--accent)">
                                @ {portfolioData.experience[activeTab].company}
                            </span>
                        </h3>
                        <p className="font-mono text-sm text-(--text-primary) mb-6 mt-1">
                            {portfolioData.experience[activeTab].date}
                        </p>

                        <ul className="space-y-4">
                            {portfolioData.experience[activeTab].description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-3 relative">
                                    <span className="text-(--accent) mt-1.5 text-xs">▹</span>
                                    <span className="leading-relaxed">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}