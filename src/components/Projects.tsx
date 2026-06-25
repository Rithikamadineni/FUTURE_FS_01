function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern responsive portfolio built using React, TypeScript, and Tailwind CSS with a clean UI and smooth user experience.",
      tech: "React • TypeScript • Tailwind CSS",
      demo: "https://your-portfolio.vercel.app",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Travel Journal",
      description:
        "A responsive travel journal application showcasing destinations with an elegant and user-friendly interface.",
      tech: "React • CSS",
      demo: "https://your-travel-journal.netlify.app",
      github: "https://github.com/yourusername/travel-journal",
    },
    {
      title: "Calculator",
      description:
        "A responsive calculator built using HTML, CSS, and JavaScript with accurate calculations and modern design.",
      tech: "HTML • CSS • JavaScript",
      demo: "https://your-calculator.netlify.app",
      github: "https://github.com/Rithikamadieni/Calculator1",
    },
    {
      title: "Teacher Management System",
      description:
        "A Java-based CRUD application for efficiently managing teacher records using JDBC and MySQL.",
      tech: "Java • JDBC • MySQL",
      demo: "",
      github: "https://github.com/Rithikamadieni/EmpManagement",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Projects</h2>

          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills in Java Full Stack
            Development and responsive web application development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              <p className="text-blue-400 font-medium mb-8">
                {project.tech}
              </p>

              <div className="flex gap-4">

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="bg-slate-700 px-5 py-2 rounded-lg cursor-not-allowed opacity-60"
                  >
                    Live Demo
                  </button>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-500 px-5 py-2 rounded-lg hover:border-white hover:bg-slate-700 transition duration-300"
                >
                  GitHub
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;