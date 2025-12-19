"use client";
import React from "react";
import { portfolioData } from "@/config/content";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto pt-24 md:pt-0">
            <div className="flex flex-col items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-green font-mono text-lg mb-5 block pl-1">
                        Hi, my name is
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4 leading-tight">
                        {portfolioData.personal.name}.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6 leading-tight">
                        I build things for the web.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-slate text-lg max-w-xl mb-10 leading-relaxed">
                        {portfolioData.personal.about}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="/#work"
                        className="border border-green text-green px-8 py-4 rounded font-mono hover:bg-green/10 transition-colors inline-block"
                    >
                        Check out my work!
                    </a>
                </motion.div>
            </div>
        </section>
    );
}