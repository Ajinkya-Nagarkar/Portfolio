"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="max-w-2xl mx-auto py-24 px-6 md:px-10 text-center mb-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-green text-sm mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
                    Get In Touch
                </h2>
                <p className="text-slate text-lg mb-12 leading-relaxed">
                    I am currently looking for full-time Software Engineering opportunities
                    starting May 2025. Whether you have a question or just want to say hi,
                    my inbox is always open!
                </p>

                <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="border border-green text-green px-8 py-4 rounded font-mono hover:bg-green/10 transition-colors inline-block"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
}