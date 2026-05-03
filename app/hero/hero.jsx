"use client";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section 
        id="hero"
        className="flex items-center justify-center min-h-screen px-6 bg-white"
    >

      <div className="text-center max-w-4xl">

        {/* STATUS BADGE */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 bg-gray-100 text-gray-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium">
            Looking for Work
          </span>
        </div>

        {/* NAME */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Yasmiin Abdullahi
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12">
          Software Developer focused on building clean, scalable, and user-centered applications across the full stack.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="mailto:YasmiinAbdi535@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-md transition"
          >
            <FiMail className="text-xl" />
            Email
          </a>

          <a
            href="https://github.com/YasmiinAx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-md transition"
          >
            <FiGithub className="text-xl" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yasmiinabdullahi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-md transition"
          >
            <FiLinkedin className="text-xl" />
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}