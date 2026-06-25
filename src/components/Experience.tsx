function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience & Education
        </h2>

        <div className="space-y-10">

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer Intern
            </h3>
            <p className="text-blue-400">
              Ceeras IT Services
            </p>
            <p className="text-gray-400">
              Worked on responsive web applications using React and modern frontend technologies.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold">
              B.Tech - Computer Science Engineering
            </h3>
            <p className="text-blue-400">
              Sri Venkateswara University College of Engineering
            </p>
            <p className="text-gray-400">
              Expected Graduation: 2027
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;