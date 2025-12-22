"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto py-24 px-6 md:px-10 mb-20"
        >
            {/* 1. The Standard Section Header (Matches About, Experience, Projects) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-(--accent) font-mono text-xl md:text-2xl font-bold">
                    04.
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-(--text-secondary)">
                    Get In Touch
                </h2>
                <div className="h-px bg-lightest-navy grow ml-4 max-w-xs"></div>
            </motion.div>

            {/* 2. The Contact Content (Centered) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center max-w-2xl mx-auto"
            >
                <p className="text-(--text-primary) text-lg mb-12 leading-relaxed">
                    I am currently looking for full-time Software Engineering opportunities
                    starting May 2025. Whether you have a question or just want to say hi,
                    my inbox is always open!
                </p>

                <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="border border-(--accent) text-(--accent) px-8 py-4 rounded font-mono hover:bg-(--accent)/10 transition-colors inline-block"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
}