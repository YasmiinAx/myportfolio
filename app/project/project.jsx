"use client";

import { useState } from "react";
import projects from "./projects.json";
import { FiArrowRight, FiGithub, FiX } from "react-icons/fi";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="mb-50 px-6">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
            <div>
                <h2 className="text-4xl font-bold text-black dark:text-white">
                    Featured Projects
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    A selection of projects showcasing practical solutions, clean architecture, and thoughtful design.
                </p>
            </div>
        </div>
        
        {/* GRID */}
        <div 
            id="project"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <div
                onClick={() => setSelectedImage(project.image)}
                className="h-48 w-full overflow-hidden cursor-pointer group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-4">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[12px] px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 pt-2 items-center">

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-red-600 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                    >
                      <FiGithub className="text-lg" />
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg hover:scale-105 transition"
            >
              <FiX size={20} />
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}