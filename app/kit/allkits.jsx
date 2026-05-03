"use client";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { SiJavascript, SiReact, SiPostgresql, SiNodedotjs, SiTailwindcss, SiGit } from "react-icons/si";
import kitsData from "./kits.json";

const iconMap = {
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
};

const techStack = kitsData.map((kit) => ({
  ...kit,
  Icon: iconMap[kit.icon],
}));

export default function AllKits() {
    const [selectedTech, setSelectedTech] = useState(null);

    const openTech = (tech) => {
        setSelectedTech(tech);
    };

    const closeTech = () => {
        setSelectedTech(null);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 px-4 pt-28 pb-20">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-4xl border border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 p-10 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.2)] mb-12">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-black dark:text-white mb-3">Full Toolkit</h1>
                            <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">Explore the tools I rely on, with skill levels and project usage shown clearly.</p>
                        </div>
                        <Link href="/" className="inline-flex items-center rounded-2xl bg-black dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-200">
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            onClick={() => openTech(tech)}
                        >
                            <div className={`w-16 h-16 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? "-rotate-3" : "rotate-3"} group-hover:rotate-0 transition-transform duration-300`}>
                                <tech.Icon className="text-3xl text-black dark:text-white" />
                            </div>
                            <h3 className="font-bold text-lg text-black dark:text-white mb-2">{tech.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tech.experience}</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                    <span>{tech.level}</span>
                                    <span>{tech.progress}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                    <div style={{ width: `${tech.progress}%` }} className="h-full rounded-full bg-black dark:bg-white transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedTech && (
                    <div className="fixed inset-0 bg-slate-950/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="rounded-4xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 max-w-md w-full shadow-2xl">
                            <div className="relative p-8">
                                <button
                                    onClick={closeTech}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg"
                                >
                                    <FiX className="text-xl text-black dark:text-white" />
                                </button>
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                                        <selectedTech.Icon className="text-4xl text-black dark:text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-black dark:text-white mb-2">{selectedTech.name}</h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedTech.experience} experience</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                        <span>{selectedTech.level}</span>
                                        <span>{selectedTech.progress}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                        <div style={{ width: `${selectedTech.progress}%` }} className="h-full rounded-full bg-black dark:bg-white transition-all" />
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Used in <span className="font-semibold text-black dark:text-white">{selectedTech.projects}</span> projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}