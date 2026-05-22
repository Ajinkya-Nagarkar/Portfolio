/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0a192f",
                "light-navy": "#112240",
                "lightest-navy": "#233554",
                slate: "#8892b0",
                "light-slate": "#a8b2d1",
                "lightest-slate": "#ccd6f6",
                white: "#e6f1ff",
                green: "#7B61FF",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-fira-code)", "monospace"],
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
        },
    },
    plugins: [],
};