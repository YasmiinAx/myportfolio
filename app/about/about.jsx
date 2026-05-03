export default function About() {
    return (
      <section id="about" className="mb-20 px-4">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-12 md:p-20 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-black dark:text-white">About Me</h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a Software Development student with a deep fascination for the intersection of technology and human-centric design. Currently immersing myself in the worlds of full-stack development, I spend my days solving complex puzzles and learning new frameworks that bring ideas to life.
              </p>
              <p>
                My approach is rooted in clean code, collaborative problem-solving, and a commitment to continuous learning. Whether it's crafting responsive frontends or architecting robust backends, I thrive on the challenge of building things that matter.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}