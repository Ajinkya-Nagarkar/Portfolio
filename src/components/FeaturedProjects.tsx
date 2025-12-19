"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function FeaturedProjects() {
    return (
        <section id="work" className="max-w-6xl mx-auto py-24 px-6 md:px-10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-16"
            >
                <span className="text-green font-mono text-xl md:text-2xl font-bold">
                    03.
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate">
                    Some Things I've Built
                </h2>
                <div className="h-[1px] bg-lightest-navy flex-grow ml-4 max-w-xs"></div>
            </motion.div>

            {/* Featured Projects List */}
            <div className="space-y-24 md:space-y-32">
                {portfolioData.featuredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-center"
                    >
                        {/* IMAGE SECTION 
               - Even Index: Left side (cols 1-7)
               - Odd Index: Right side (cols 6-13)
            */}
                        <div
                            className={`relative h-[300px] md:h-[400px] w-full rounded bg-green/20 overflow-hidden border border-green/20 group 
              ${index % 2 === 0
                                    ? "md:col-start-1 md:col-end-8" // Image Left
                                    : "md:col-start-6 md:col-end-13" // Image Right
                                } 
              col-span-full md:row-start-1 z-0 shadow-xl`}
                        >
                            {/* Overlay that fades on hover */}
                            <div className="absolute inset-0 bg-navy/60 group-hover:bg-transparent transition-all duration-300 z-10"></div>

                            {/* Placeholder for Image - Replace with <img> tag later */}
                            <div className="absolute inset-0 bg-light-navy flex items-center justify-center">
                                <span className="font-mono text-green text-6xl font-bold opacity-30">
                                    {project.title.charAt(0)}
                                </span>
                            </div>
                        </div>

                        {/* CONTENT SECTION 
               - Even Index: Right side (cols 7-13) -> Overlaps Image
               - Odd Index: Left side (cols 1-7) -> Overlaps Image
            */}
                        <div
                            className={`relative z-20 flex flex-col justify-center p-6 md:p-0 
              ${index % 2 === 0
                                    ? "md:col-start-7 md:col-end-13 md:text-right md:items-end" // Content Right
                                    : "md:col-start-1 md:col-end-7 md:text-left md:items-start" // Content Left
                                } 
              col-span-full md:row-start-1`}
                        >
                            <p className="font-mono text-green text-sm mb-2">Featured Project</p>
                            <h3 className="text-lightest-slate text-2xl font-bold mb-6">
                                {project.title}
                            </h3>

                            {/* Description Box - The key to the overlap look */}
                            <div className="bg-light-navy p-6 rounded shadow-xl text-slate text-sm leading-relaxed mb-6 w-full md:w-[110%] z-20">
                                {project.description}
                            </div>

                            {/* Tech Stack */}
                            <ul
                                className={`flex flex-wrap gap-4 text-xs font-mono text-slate/80 mb-8 
                ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                            >
                                {project.tech.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>

                            {/* Links */}
                            <div className="flex gap-6 text-slate">
                                <a href={project.links.github} className="hover:text-green transition-colors">
                                    <FiGithub size={22} />
                                </a>
                                <a href={project.links.external} className="hover:text-green transition-colors">
                                    <FiExternalLink size={22} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}