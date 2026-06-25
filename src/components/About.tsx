function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="text-center mb-16">
         

          <h2 className="text-5xl font-bold mt-3">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold leading-snug mb-6">
              Building modern, scalable and user-focused web applications.
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              I'm <span className="text-blue-400 font-semibold">Rithika Madineni</span>,
              a Computer Science Engineering student passionate about Java Full
              Stack Development. I enjoy building responsive, efficient and
              scalable web applications while continuously improving my
              development skills.
            </p>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              My expertise includes Java, Spring Boot, Hibernate, React,
              JavaScript, TypeScript, MySQL and RESTful APIs. I enjoy solving
              real-world problems by writing clean, maintainable and efficient
              code while following modern development practices.
            </p>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              I am currently seeking opportunities where I can contribute to
              meaningful projects, collaborate with experienced developers and
              continue growing as a Full Stack Java Developer.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-blue-400">
                Java
              </h3>

              <p className="text-gray-300 mt-3">
                Core Programming
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-blue-400">
                Spring
              </h3>

              <p className="text-gray-300 mt-3">
                Backend Development
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-blue-400">
                React
              </h3>

              <p className="text-gray-300 mt-3">
                Frontend Development
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-blue-400">
                REST APIs
              </h3>

              <p className="text-gray-300 mt-3">
                API Development
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;