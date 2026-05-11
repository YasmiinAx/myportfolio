export default function About() {
  return (
    <section
      id="about"
      className="
        bg-[#e8eef6]
        border-y border-[#c4c7c7]
        py-[120px]
      "
    >
      <div
        className="
          grid grid-cols-1 md:grid-cols-12
          gap-6
          items-center
          px-5 md:px-16
          max-w-[1280px]
          mx-auto
        "
      >

        {/* IMAGE */}
        <div
          className="
            md:col-span-5
            aspect-4/5
            bg-[#e8eef6]
            rounded-lg
            overflow-hidden
            border border-[#c4c7c7]
            shadow-xl
          "
        >
          <img
            className="
              w-full h-full
              object-cover
              grayscale
              hover:grayscale-0
              transition-all duration-700
            "
            src="/self.png"
            alt="About portrait"
          />
        </div>

        {/* TEXT */}
        <div className="md:col-span-7 md:pl-16 mt-12 md:mt-0">

          {/* TITLE */}
          <h2
            className="
              text-[32px] md:text-[48px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#161c22]
              mb-8
            "
          >
            Built with Purpose. <br />
            <span className="text-black">Designed with Precision.</span>
          </h2>

          {/* CONTENT */}
          <div
            className="
              space-y-8
              text-[18px]
              leading-[1.6]
              text-[#434747]
            "
          >
            <p>
              I recently graduated from SAIT’s Software Development program with Honours (3.97 GPA), where I built a strong foundation in full-stack development and problem solving.
            </p>

            <p>
              I’m particularly interested in creating applications that are not only functional, but thoughtfully designed and maintainable. Whether working on frontend experiences or backend systems, I focus on writing clean code and building solutions that scale.
            </p>

            <p>
              I thrive in team environments that value collaboration, communication, and shared problem-solving. As I grow in the industry, I’m motivated to keep learning, take on complex challenges, and contribute to impactful work.
            </p>
          </div>

          {/* STATS */}
          <div
            className="
              grid grid-cols-2
              gap-12
              mt-16
              pt-10
              border-t border-[#c4c7c7]
            "
          >
            <div>
              <div className="text-[50px] font-bold text-[#161c22] leading-none">
                3.97
              </div>
              <div
                className="
                  text-[12px]
                  uppercase
                  tracking-[0.25em]
                  text-[#434747]
                  mt-2
                  font-semibold
                "
              >
                GPA
              </div>
            </div>

            <div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}