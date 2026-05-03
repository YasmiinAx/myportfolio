"use client";

import kitsData from "./kits.json";
import { SiJavascript, SiReact, SiPostgresql, SiNodedotjs, SiTailwindcss, SiGit } from "react-icons/si";

const iconMap = {
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
};

const toolkit = kitsData.map((tool) => ({
  ...tool,
  Icon: iconMap[tool.icon],
}));

export default function Kit() {
  return (
    <section 
        id="kit" 
        className="mb-20 px-4"
    >

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          The Kit
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Tools and skill levels that shape the projects I build.
        </p>
      </div>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-3">

        {toolkit.map((tool) => (
          <div
            key={tool.name}
            className="w-44 h-44 rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-sm transition-all hover:shadow-xl flex flex-col justify-center items-center text-center"
          >

            {/* ICON */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white mb-3">
              <tool.Icon className="text-xl" />
            </div>

            {/* NAME */}
            <h3 className="text-sm font-semibold text-black dark:text-white">
              {tool.name}
            </h3>

            {/* PROGRESS BAR + % */}
            <div className="mt-4 w-full">
              <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <div
                  style={{ width: `${tool.progress}%` }}
                  className="h-full rounded-full bg-black dark:bg-white transition-all"
                />
              </div>
              <div className="flex justify-end mt-1 text-[12px] text-gray-600 dark:text-gray-400 mb-1">
                <span>{tool.progress}%</span>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}