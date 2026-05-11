"use client";

import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function ContactMe() {
  return (
    <section 
      id="contact" 
      className="bg-[#f6f9ff] py-[120px] reveal"
    >
      <div className="px-[20px] md:px-[64px] max-w-[1280px] mx-auto text-center">
        {/* Title */}
        <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.02em] text-[#161c22] mb-8">
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-[18px] leading-[1.6] text-[#434747] max-w-2xl mx-auto mb-20">
          I'm currently open to new opportunities and technical collaborations. 
          If you're looking for a dedicated software developer to build robust, 
          scalable applications, let's connect.
        </p>

        {/* Contact Buttons Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* EMAIL */}
          <a 
            href="mailto:YasmiinAbdi535@gmail.com" 
            className="flex items-center justify-center gap-4 px-10 py-6 border border-[#c4c7c7] hover:border-[#000000] transition-all group min-w-[240px] hover:-translate-y-1 hover:shadow-xl rounded-xs"
          >
            <FiMail className="text-2xl text-[#434747] group-hover:text-[#000000]" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#434747] group-hover:text-[#000000]">
              Email
            </span>
          </a>

          {/* LINKEDIN */}
          <a 
            href="https://linkedin.com/in/yasmiinabdullahi" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 px-10 py-6 border border-[#c4c7c7] hover:border-[#000000] transition-all group min-w-[240px] hover:-translate-y-1 hover:shadow-xl rounded-xs"
          >
            <FaLinkedin className="text-2xl text-[#434747] group-hover:text-[#000000]" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#434747] group-hover:text-[#000000]">
              LinkedIn
            </span>
          </a>

          {/* GITHUB */}
          <a 
            href="https://github.com/YasmiinAx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 px-10 py-6 border border-[#c4c7c7] hover:border-[#000000] transition-all group min-w-[240px] hover:-translate-y-1 hover:shadow-xl rounded-xs"
          >
            <SiGithub className="text-2xl text-[#434747] group-hover:text-[#000000]" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#434747] group-hover:text-[#000000]">
              GitHub
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}