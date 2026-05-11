"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Nav() {

  /**
   * ACTIVE SECTION TRACKING
   */
  const [activeSection, setActiveSection] = useState("");

  /**
   * THEME SYSTEM
   */
  const { theme, setTheme } = useTheme();

  /**
   * SCROLL DETECTION
   */
  useEffect(() => {
    const sections = ["about", "projects", "techstack", "contact"];

    const onScroll = () => {
      const offset = window.scrollY + 500;
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el && offset >= el.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /**
   * NAV LINKS
   */
  const links = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Stack", id: "techstack" },
    { label: "Contact", id: "contact" },
  ];

  /**
   * SMOOTH SCROLL
   */
  const handleClick = (e, id) => {
    if (window.location.pathname === "/") {
      e.preventDefault();

      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      id="nav"
      className="
        fixed top-0 z-50 w-full
        border-b border-[#c4c7c7]
        bg-[#f6f9ff]/80
        backdrop-blur-md
      "
    >
      <div
        className="
          flex h-20
          items-center justify-between
          px-5 md:px-16
        "
      >

        {/* LOGO */}
        <Link
          href="/"
          onClick={(e) => handleClick(e, "hero")}
          className="text-[24px] font-bold tracking-[-0.04em] text-[#161c22]"
        >
          YASMIIN ABDULLAHI
        </Link>

        {/* NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`
                border-b-2 pb-1
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.05em]
                transition-colors
                ${
                  activeSection === link.id
                    ? "border-black text-black"
                    : "border-transparent text-[#434747] hover:text-black"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
              text-[#434747]
              transition-colors
              hover:text-black
            "
          >
            {theme === "dark" ? (
              <FiSun size={24} />
            ) : (
              <FiMoon size={24} />
            )}
          </button>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download="Yasmiin_Abdullahi_Resume.pdf"
            className="
              bg-black
              px-6
              py-3
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.05em]
              text-white
              transition-opacity
              hover:opacity-90
              rounded-xs
              hover:-translate-y-1
              hover:shadow-xl
              hover:border-black
            "
          >
            DOWNLOAD RESUME
          </a>

        </div>
      </div>
    </nav>
  );
}