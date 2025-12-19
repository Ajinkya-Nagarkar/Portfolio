import React from "react";

export default function Footer() {
    return (
        <footer className="text-center py-6 text-slate text-sm font-mono hover:text-green transition-colors pb-10">
            <a
                href="https://github.com/bchiang7/v4" // Giving credit to the design inspiration is classy
                target="_blank"
                rel="noreferrer"
            >
                Designed & Built by Ajinkya Nagarkar
            </a>
        </footer>
    );
}