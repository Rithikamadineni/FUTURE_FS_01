const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Data Structures & Algorithms"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Hibernate", "JDBC", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL"],
  },
];

const tools = [
  "Git",
  "GitHub",
  "Maven",
  "Postman",
  "IntelliJ IDEA",
  "VS Code",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-8">
            Technologies and tools I use to build scalable,
            reliable, and modern full-stack applications.
          </p>

        </div>

        {/* Skill Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-[#111827] border border-slate-700 rounded-3xl p-8
              hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>

              <h3 className="text-2xl font-semibold mb-8">
                {category.title}
              </h3>

              <div className="space-y-5">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center justify-between
                    border-b border-slate-700 pb-4"
                  >

                    <span className="text-gray-300 text-lg">
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Tools */}

        <div
          className="mt-8 bg-[#111827] border border-slate-700 rounded-3xl p-8
          hover:border-blue-500 transition-all duration-300"
        >

          <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>

          <h3 className="text-2xl font-semibold mb-8">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap gap-4">

            {tools.map((tool) => (

              <div
                key={tool}
                className="px-5 py-3 rounded-xl
                border border-slate-700
                text-gray-300
                hover:border-blue-500
                hover:text-white
                transition-all duration-300"
              >
                {tool}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}