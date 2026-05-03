"use client";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer id="contact" className="w-full mt-24 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4">
        <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400">© 2024 Portfolio. Built with passion.</p>
        <div className="flex gap-6">
        <a className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300" href="mailto:YasmiinAbdi535@gmail.com">
        <FiMail className="text-2xl" />
        </a>
        <a className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300" href="https://github.com/yasmiinabdullahi" target="_blank" rel="noopener noreferrer">
        <FiGithub className="text-2xl" />
        </a>
        <a className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300" href="https://linkedin.com/in/yasmiinabdullahi" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="text-2xl" />
        </a>
        </div>
        </div>
        </footer>
    );
}