"use client";

import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="bg-[#f6f9ff] py-8 border-t border-[#c4c7c7]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-[20px] md:px-[64px] w-full">
        
        {/* TEXT - Left side on desktop */}
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#434747]">
          © 2026 YASMIIN ABDULLAHI. ALL RIGHTS RESERVED.
        </p>

        {/* ICONS - Right side on desktop */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:YasmiinAbdi535@gmail.com"
            className="text-[#434747] hover:text-[#000000] transition-colors hover:-translate-y-0.5 hover:shadow-xl"
          >
            <FiMail className="text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/yasmiinabdullahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#434747] hover:text-[#000000] transition-colors text-2xl font-light hover:-translate-y-0.5 hover:shadow-xl"
          >
            <FaLinkedin className="text-xl" />
          </a>

          <a
            href="https://github.com/YasmiinAx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#434747] hover:text-[#000000] transition-colors hover:-translate-y-0.5 hover:shadow-xl"
          >
            <SiGithub className="text-xl" />
          </a>
        </div>

      </div>
    </footer>
  );
}