"use client";
import React from "react";
import { portfolioData } from "@/config/content/index";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { useRef } from "react";

// RENAMED to OtherProjects
export default function OtherProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const CARD_WIDTH = 380;
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -CARD_WIDTH * 2,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: CARD_WIDTH * 2,
            behavior: "smooth",
        });
    };

    return (
        <section className="max-w-6xl mx-auto py-24 px-6 md:px-10">

            {/* Centered Title */}
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-(--text-secondary) mb-4">
                    Other Noteworthy Projects
                </h2>
                {/* <a href="#" className="font-mono text-(--accent) text-sm hover:underline">
                    view the archive
                </a> */}
            </div>

            {/* Grid - Now using 'otherProjects' */}
            <div className="flex items-center gap-4 w-full">
                <button
                    onClick={scrollLeft}
                    className="relative left-2 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center border border-(--accent)/30 text-(--accent) p-3 rounded-full hover:bg-(--accent)/10"
                >
                    ‹
                </button>
                <div className="relative flex-1 overflow-hidden">
                    {/* SCROLL RAIL */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-scroll snap-x snap-mandatory px-16 no-scrollbar items-stretch mask-[linear-gradient(to_right,transparent,black_28px,black_calc(100%-28px),transparent)]"
                    >
                        {portfolioData.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-(--bg-card) p-8 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col group shrink-0 snap-start w-[320px] md:w-90 lg:w-100"
                            >
                                <div className="flex justify-between items-center mb-6">
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
                </div>
                <button
                    onClick={scrollRight}
                    className="relative right-2 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center border border-(--accent)/30 text-(--accent) p-3 rounded-full hover:bg-(--accent)/10"
                >
                    ›
                </button>
            </div>
        </section>
    );
}