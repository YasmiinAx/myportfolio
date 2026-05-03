"use client";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
    return (
        <section id="hero" className="px-4 pt-28 pb-20">
            <div className="mx-auto max-w-5xl rounded-4xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.15)] px-8 py-16">
                <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-4 py-2 rounded-full mb-10 shadow-sm">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                    <span className="font-medium text-sm uppercase tracking-[0.2em]">Looking for Work</span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight">
                    Yasmiin Abdullahi
                </h1>

                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-12">
                    Aspiring Software Developer crafting digital experiences with code and creativity. Focused on building accessible, performant, and delightful applications.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                    <a className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-4 text-sm font-medium text-black dark:text-white shadow-sm transition-all hover:shadow-lg" href="mailto:YasmiinAbdi535@gmail.com">
                        <FiMail className="text-xl" />
                        Email
                    </a>
                    <a className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-4 text-sm font-medium text-black dark:text-white shadow-sm transition-all hover:shadow-lg" href="https://github.com/yasmiinabdullahi" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="text-xl" />
                        GitHub
                    </a>
                    <a className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-4 text-sm font-medium text-black dark:text-white shadow-sm transition-all hover:shadow-lg" href="https://linkedin.com/in/yasmiinabdullahi" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="text-xl" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}