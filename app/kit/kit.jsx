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
        <section id="kit" className="mb-20 px-4">
            <div className="mx-auto max-w-7xl rounded-4xl border border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-slate-950 px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-black dark:text-white">The Kit</h2>
                        <p className="mt-3 max-w-2xl text-base text-gray-700 dark:text-gray-300">Tools and skill levels that shape the projects I build.</p>
                    </div>
                    <a href="/kits" className="inline-flex items-center justify-center rounded-2xl bg-black dark:bg-white px-8 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-200">
                        Full Toolkit
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolkit.map((tool) => (
                        <div key={tool.name} className="rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
                                    <tool.Icon className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white">{tool.name}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tool.experience}</p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                    <span>{tool.level}</span>
                                    <span>{tool.progress}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                    <div style={{ width: `${tool.progress}%` }} className="h-full rounded-full bg-black dark:bg-white transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}