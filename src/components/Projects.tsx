"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

// RENAMED to OtherProjects
export default function OtherProjects() {
    return (
        <section className="max-w-6xl mx-auto py-24 px-6 md:px-10">

            {/* Centered Title */}
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-(--text-secondary) mb-4">
                    Other Noteworthy Projects
                </h2>
                <a href="#" className="font-mono text-(--accent) text-sm hover:underline">
                    view the archive
                </a>
            </div>

            {/* Grid - Now using 'otherProjects' */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-(--bg-card) p-8 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col group h-full"
                    >
                        <div className="flex justify-between items-center mb-6 snap-start min-w-[320px]">
                            <FiFolder className="text-4xl text-(--accent)" />
                            <div className="flex gap-4">
                                <a href={project.links.github} className="text-(--text-primary) hover:text-(--accent)">
                                    <FiGithub size={20} />
                                </a>
                                <a href={project.links.external} className="text-(--text-primary) hover:text-(--accent)">
                                    <FiExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-(--text-secondary) mb-2 group-hover:text-(--accent) transition-colors">
                            {project.title}
                        </h3>
                        <div className="text-(--text-primary) text-sm mb-6 leading-relaxed grow">
                            {project.description}
                        </div>

                        <ul className="flex flex-wrap gap-3 text-xs font-mono text-(--text-primary)/60 mt-auto">
                            {project.tech.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}