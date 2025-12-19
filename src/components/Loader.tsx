"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
    // 'mounted' controls the layout (Center vs Top-Left)
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        // 1. Wait for the drawing animation to finish (approx 2s)
        const timer1 = setTimeout(() => {
            setIsMounted(false); // Triggers the "Move to Corner" animation
        }, 2500);

        // 2. Wait for the "Move" animation to finish, THEN unmount
        const timer2 = setTimeout(() => {
            finishLoading(); // Actually hides this component
        }, 3500); // 2500ms + 1000ms for the move

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [finishLoading]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ backgroundColor: "#0a192f" }} // Navy
            animate={{
                // Fade out background slightly faster so we can see the site appearing behind the moving logo
                backgroundColor: isMounted ? "#0a192f" : "rgba(10, 25, 47, 0)",
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
                className="fixed"
                // INITIAL STATE: Big and Centered
                initial={{
                    width: "120px",
                    height: "120px",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    opacity: 1
                }}
                // ANIMATE PROP: Switches based on 'isMounted'
                animate={
                    isMounted
                        ? {
                            // Stay Centered
                            top: "50%",
                            left: "50%",
                            x: "-50%",
                            y: "-50%",
                            width: "120px",
                            height: "120px",
                        }
                        : {
                            // MOVE TO CORNER
                            // Adjust these values to match your Navbar padding
                            // Navbar is h-20 (80px), so roughly 40px down is center
                            top: "25px",
                            left: "25px",
                            x: "0%",
                            y: "0%",
                            width: "48px", // Matches Navbar logo size
                            height: "48px",
                            opacity: 0,    // Fade out at the very end to swap with real logo
                            transition: {
                                duration: 1.0,
                                ease: "easeInOut",
                                // The opacity fade happens at the END of the move
                                opacity: { duration: 0.2, delay: 0.8 }
                            }
                        }
                }
            >
                <g>
                    {/* Hexagon Path */}
                    <motion.path
                        d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 Z"
                        stroke="#64ffda"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // Only animate the drawing ONCE at the start
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: 1,
                            transition: { duration: 1.5, ease: "easeInOut" },
                        }}
                    />
                    {/* The Letter "A" */}
                    <motion.text
                        x="50"
                        y="62"
                        textAnchor="middle"
                        fill="#64ffda"
                        fontSize="45"
                        fontFamily="monospace"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1.0, duration: 0.5 },
                        }}
                    >
                        A
                    </motion.text>
                </g>
            </motion.svg>
        </motion.div>
    );
}