"use client";

import { useState } from "react";
import projects from "./projects.json";
import { FiX } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="projects"
      className="
        py-[120px]
        px-[20px] md:px-[64px]
        bg-[#f6f9ff]
      "
    >
      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="mb-[70px] text-center md:text-left">
          <h2 className="text-[32px] md:text-[48px] font-semibold tracking-[-0.02em] text-[#161c22] uppercase">
            Featured Projects
          </h2>

          <p className="text-[18px] text-[#434747] leading-[1.6] max-w-[720px]">
            A selection of projects showcasing practical solutions, clean architecture, and thoughtful design.
          </p>
        </div>

        {/* ZIGZAG LIST */}
        <div className="space-y-[180px]">

          {projects.map((project, index) => {

            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className="
                  grid grid-cols-1 lg:grid-cols-12
                  gap-[64px]
                  items-center
                "
              >

                {/* IMAGE (LEFT or RIGHT) */}
                <div
                  className={`
                    lg:col-span-7
                    ${isEven ? "lg:order-2" : "lg:order-1"}
                  `}
                >
                  <div
                    onClick={() => setSelectedImage(project.image)}
                    className="
                      aspect-video
                      overflow-hidden
                      bg-[#e8eef6]
                      border border-[#c4c7c7]
                      cursor-pointer
                      group
                      rounded-lg
                      opacity-60
                      hover:opacity-100
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full h-full
                        object-cover
                        transition-transform duration-800
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* CONTENT (OPPOSITE SIDE) */}
                <div
                  className={`
                    lg:col-span-5
                    ${isEven ? "lg:order-1 lg:pr-[48px]" : "lg:order-2 lg:pl-[48px]"}
                  `}
                >

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-2 py-1
                          text-[10px]
                          uppercase
                          tracking-[0.2em]
                          font-semibold
                          bg-[#e8eef6]
                          border border-[#c4c7c7]
                          text-[#161c22]
                          rounded-full
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[32px] md:text-[48px] font-semibold text-[#161c22] leading-[1.2] mb-8">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[18px] text-[#434747] leading-[1.6] mb-10 max-w-[720px]">
                    {project.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-4">

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        className="
                          bg-black
                          text-white
                          px-10 py-4
                          text-[14px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          hover:opacity-90
                          transition
                          rounded-xs
                          hover:-translate-y-1
                          hover:shadow-xl
                          hover:border-black
                        "
                      >
                        Live Demo
                      </a>
                    )}

                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        className="
                          border border-[#747878]
                          px-10 py-4
                          text-[14px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#161c22]
                          hover:bg-[#e8eef6]
                          transition
                          flex items-center gap-2
                          rounded-xs
                          hover:-translate-y-1
                          hover:shadow-xl
                          hover:border-black
                        "
                      >
                        <SiGithub className="text-xl"/>
                        Code
                      </a>
                    )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2"
            >
              <FiX size={20} />
            </button>

            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}