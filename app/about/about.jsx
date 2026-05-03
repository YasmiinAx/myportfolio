export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center px-6 pb-50 bg-white"
    >
      
      <div className="max-w-4xl w-full">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            About Me
          </h2>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-xl leading-relaxed text-gray-600 text-left">

          <p>
            I recently graduated from SAIT’s Software Development program with Honours (3.97 GPA), where I built a strong foundation in 
            full-stack development and problem solving.
          </p>

          <p> 
            I’m particularly interested in creating applications that are not only functional, but thoughtfully designed and maintainable. 
            Whether working on frontend experiences or backend systems, I focus on writing clean code and building solutions that scale.
          </p>

          <p>
            I thrive in team environments that value collaboration, communication, and shared problem-solving. As I grow in the industry, 
            I’m motivated to keep learning, take on complex challenges, and contribute to impactful work.
          </p>
        </div>

      </div>
    </section>
  );
}