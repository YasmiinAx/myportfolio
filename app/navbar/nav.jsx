"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "kit"];

    const updateActiveSection = () => {
      const offset = window.scrollY + 140;
      let current = "";

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        if (offset >= element.offsetTop) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const links = [
    { label: "Contact", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Kit", id: "kit" },
  ];

  const handleNavClick = (e, id) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 border-b border-gray-200 dark:border-gray-700 backdrop-blur shadow-sm">
      <div className="flex items-center max-w-7xl mx-auto h-20 px-8">
            <div className="min-w-[160px]">
              <span className="text-xl font-bold tracking-tight text-black dark:text-white">
                  myportfolio
              </span>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center gap-10">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    className={`font-medium transition-all duration-300 border-b-2 pb-1 ${
                      activeSection === link.id
                        ? "text-black dark:text-white border-black dark:border-white"
                        : "text-gray-700 dark:text-gray-300 border-transparent hover:text-black dark:hover:text-white"
                    }`}
                    href={`/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
            <div className="flex items-center gap-3 min-w-[220px] justify-end">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                    {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
                </button>
                <a href="https://example.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-black dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-200">
                    Resume
                </a>
            </div>
        </div>
    </nav>
  );
}