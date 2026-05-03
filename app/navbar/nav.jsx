"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Nav() {

  /**
   * STATE MANAGEMENT
   * Tracks which section is currently active (for underline highlight)
   */
  const [activeSection, setActiveSection] = useState("");

  /**
   * THEME SYSTEM
   * Handles dark/light mode toggle
   */
  const { theme, setTheme } = useTheme();

  /**
   * SCROLL TRACKING LOGIC
   * Detects which section is currently in view
   * and updates active navigation link
   */
  useEffect(() => {
    const sections = ["hero", "about", "projects", "kit"];

    const onScroll = () => {
      const offset = window.scrollY + 250;
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop) current = id;
      });

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /**
   * NAVIGATION LINKS CONFIG 
   * Central place to manage nav items
   */
  const links = [
    { label: "Contact", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Kit", id: "kit" },
  ];

  /**
   * SMOOTH SCROLL HANDLER
   * Prevents page jump and enables smooth scrolling
   */
  const handleClick = (e, id) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
		id="nav"
		className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 border-b border-gray-200 dark:border-gray-700 backdrop-blur shadow-sm"
	>

      <div className="flex items-center justify-between h-20 px-12 lg:px-20 w-full">

        {/* LOGO SECTION */}
        <div>
          <img
            src="/logo.svg"
            alt="logo"
            className="h-20 w-auto"
          />
        </div>

        {/* NAV LINKS (CENTER) */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`font-medium border-b-2 pb-1 transition ${
                activeSection === link.id
                  ? "text-black dark:text-white border-black dark:border-white"
                  : "text-gray-700 dark:text-gray-300 border-transparent hover:text-black dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ACTION BUTTONS (RIGHT SIDE) */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* RESUME DOWNLOAD BUTTON */}
          <a
            href="/resume.pdf"
            download="Yasmiin_Abdullahi_Resume.pdf"
            className="rounded-2xl bg-black dark:bg-white px-6 py-3 font-semibold text-white dark:text-black shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}