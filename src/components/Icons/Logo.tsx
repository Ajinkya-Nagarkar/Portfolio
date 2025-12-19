import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <text
                x="50"
                y="62"
                textAnchor="middle"
                fill="currentColor"
                fontSize="45"
                fontFamily="monospace"
                fontWeight="bold"
            >
                A
            </text>
        </svg>
    );
}