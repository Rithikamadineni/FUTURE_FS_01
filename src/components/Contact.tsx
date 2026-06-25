function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
         
<div className="text-center mb-20">
  <h2 className="text-6xl font-bold">
    Contact
  </h2>



          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            I'm always open to discussing software engineering opportunities,
            internships, collaborations, or interesting projects.
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}

        <div className="bg-[#111827] border border-slate-700 rounded-3xl p-10 hover:border-blue-500 transition-all duration-300">

          <div className="grid md:grid-cols-2 gap-14">

            {/* Left Side */}

            <div>

              <h3 className="text-3xl font-semibold mb-10">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:rithikamadineni@gmail.com"
                    className="text-xl text-gray-300 hover:text-white transition"
                  >
                    rithikamadineni3@gmail.com
                  </a>
                </div>

                

               

                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com/in/rithikamadineni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 hover:text-white transition"
                  >
                    linkedin.com/in/rithikamadineni
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/Rithikamadineni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 hover:text-white transition"
                  >
                    github.com/Rithikamadineni
                  </a>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex flex-col justify-center">

              <h3 className="text-3xl font-semibold mb-8">
                Let's Connect
              </h3>

              <p className="text-gray-400 leading-8 text-lg mb-10">
                Whether you're looking for a Java Full Stack Developer,
                discussing an internship opportunity, or simply want to connect,
                I'd be happy to hear from you.
              </p>

              <a
                href="mailto:rithikamadineni@gmail.com"
                className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-xl px-8 py-4 text-lg font-semibold w-fit"
              >
                Send an Email
              </a>

            </div>

          </div>

        </div>
</div>
      </div>
      {/* Footer */}

<footer className="mt-24 pt-10 border-t border-slate-700">

  <div className="text-center">

    <h3 className="text-2xl md:text-3xl font-bold text-white">
      Rithika <span className="text-blue-500">Madineni</span>
    </h3>

    <p className="text-gray-400 mt-3 text-lg">
      Java Full Stack Developer
    </p>

    <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto my-8"></div>

    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} Rithika Madineni. All Rights Reserved.
    </p>

  </div>

</footer>
    </section>
  );
}

export default Contact;