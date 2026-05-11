"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-200
        flex flex-col items-center justify-center
        text-center
        px-5 md:px-16
        py-16
        bg-[#f6f9ff]
      "
    >

      {/* STATUS BADGE */}
      <div
        className="
          inline-flex items-center gap-2
          px-4 py-1.5
          mb-10
          rounded-full
          border border-[#c4c7c7]
          bg-[#e8eef6]
        "
      >
        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />

        <span
          className="
            text-[12px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#434747]
          "
        >
          Available for work
        </span>
      </div>

      {/* HERO TITLE */}
      <h1
        className="
          max-w-5xl
          mb-8
          text-[42px] md:text-[72px]
          font-bold
          leading-[1.1]
          tracking-[-0.04em]
          text-[#161c22]
        "
      >
        Yasmiin Abdullahi
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          max-w-2xl
          mb-14
          text-[18px]
          leading-[1.6]
          text-[#434747]
        "
      >
        Full-Stack Software Developer specialized in architecting 
        high-performance web and mobile applications. Blending technical 
        precision with scalable software architecture to build seamless, 
        cross-platform experiences.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-6">

        {/* VIEW PROJECTS */}
        <a
          href="#projects"
          className="
            bg-black
            px-12 py-5
            text-[14px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white
            shadow-lg shadow-black/10
            transition-all
            hover:opacity-90
            active:scale-95
            rounded-xs
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-black
          "
        >
          VIEW PROJECTS
        </a>

        {/* GET IN TOUCH */}
        <a
          href="#contact"
          className="
            border border-[#747878]
            px-12 py-5
            text-[14px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#161c22]
            transition-all
            hover:bg-[#e8eef6]
            rounded-xs
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-black
          "
        >
          GET IN TOUCH
        </a>

      </div>
    </section>
  );
}