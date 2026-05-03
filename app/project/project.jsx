"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import projects from "./projects.json";

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const project = projects[currentIndex];

    return (
        <section id="projects" className="mb-28 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-black dark:text-white">Featured Projects</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">A refined selection of recent work with clean interaction and clarity.</p>
                    </div>
                    <a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all" href="/projects">
                        See More Projects
                        <FiArrowRight className="text-base" />
                    </a>
                </div>

                <div className="relative group rounded-4xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-3/5 h-72 lg:h-80 overflow-hidden">
                            <img className="w-full h-full object-cover" alt={project.title} src={project.image}/>
                        </div>
                        <div className="lg:w-2/5 p-8 flex flex-col justify-center gap-6">
                            <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-black dark:text-white">
                                {project.techStack.join(" • ")}
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-black dark:text-white">{project.title}</h3>
                                <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {project.demoLink && (
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-black dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-200">
                                        View Demo
                                    </a>
                                )}
                                {project.codeLink && (
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-black dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-gray-800">
                                        Codebase
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <button onClick={prevProject} className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-black dark:text-white border border-gray-200 dark:border-gray-700 transition-transform hover:scale-110">
                        <FiChevronLeft className="text-xl" />
                    </button>
                    <button onClick={nextProject} className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-black dark:text-white border border-gray-200 dark:border-gray-700 transition-transform hover:scale-110">
                        <FiChevronRight className="text-xl" />
                    </button>
                </div>

                <div className="mt-6 flex justify-center gap-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`rounded-full transition-all ${
                                index === currentIndex ? "bg-black dark:bg-white h-2 w-8" : "bg-gray-300 dark:bg-gray-600 h-2 w-2"
                            }`}
                        />
                    ))}
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <a className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white" href="/projects">
                        See All Projects
                        <FiArrowRight className="text-base" />
                    </a>
                </div>
            </div>
        </section>
    );
}