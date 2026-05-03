"use client";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full mt-50 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* TEXT */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 Yasmiin Abdullahi. All rights reserved.
        </p>

        {/* ICONS */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:YasmiinAbdi535@gmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            <FiMail className="text-xl" />
          </a>

          <a
            href="https://github.com/YasmiinAx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            <FiGithub className="text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/yasmiinabdullahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            <FiLinkedin className="text-xl" />
          </a>
        </div>

      </div>
    </footer>
  );
}