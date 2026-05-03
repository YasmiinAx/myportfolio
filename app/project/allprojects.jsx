"use client";
import Link from "next/link";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import projects from "./projects.json";

export default function AllProjects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

    const openProject = (project) => {
        setSelectedProject(project);
        setIsImageViewerOpen(false);
    };

    const closeProject = () => {
        setSelectedProject(null);
        setIsImageViewerOpen(false);
    };

    const openImageViewer = () => {
        setIsImageViewerOpen(true);
    };

    const closeImageViewer = () => {
        setIsImageViewerOpen(false);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 px-4 pt-28 pb-20">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-4xl border border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 p-10 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.2)] mb-12">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-black dark:text-white mb-3">All Projects</h1>
                            <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">A comprehensive collection of my work and creations.</p>
                        </div>
                        <Link href="/" className="inline-flex items-center justify-center rounded-2xl bg-black dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-200">
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            onClick={() => openProject(project)}
                        >
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <span className="inline-flex px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-sm font-medium">
                                        {project.techStack.join(" • ")}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{project.description}</p>
                                <div className="mt-5 flex gap-3 items-center">
                                    {project.demoLink && (
                                        <span className="inline-flex items-center justify-center rounded-2xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-black dark:text-white bg-gray-50 dark:bg-gray-800">
                                            <FiExternalLink className="text-base" />
                                        </span>
                                    )}
                                    {project.codeLink && (
                                        <span className="inline-flex items-center justify-center rounded-2xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-black dark:text-white bg-gray-50 dark:bg-gray-800">
                                            <FiGithub className="text-base" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 bg-slate-950/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="rounded-4xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                            <div className="relative">
                                <button
                                    onClick={closeProject}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg z-10"
                                >
                                    <FiX className="text-xl text-black dark:text-white" />
                                </button>
                                <div className="h-64 md:h-80 overflow-hidden">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover cursor-pointer"
                                        onClick={openImageViewer}
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="mb-4">
                                        <span className="inline-flex px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-sm font-medium">
                                            {selectedProject.techStack.join(" • ")}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4">{selectedProject.title}</h2>
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {selectedProject.demoLink && (
                                            <a
                                                href={selectedProject.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-2xl bg-black dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-200 flex items-center gap-2"
                                            >
                                                <FiExternalLink className="text-lg" />
                                                View Demo
                                            </a>
                                        )}
                                        {selectedProject.codeLink && (
                                            <a
                                                href={selectedProject.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-2xl border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-black dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
                                            >
                                                <FiGithub className="text-lg" />
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isImageViewerOpen && selectedProject && (
                    <div className="fixed inset-0 bg-slate-950/90 dark:bg-black/80 z-60 flex items-center justify-center p-4">
                        <div className="relative max-w-6xl w-full mx-auto">
                            <button
                                onClick={closeImageViewer}
                                className="absolute right-4 top-4 z-20 w-10 h-10 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                            >
                                <FiX className="text-xl" />
                            </button>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full max-h-[calc(100vh-4rem)] object-contain rounded-[28px] shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}