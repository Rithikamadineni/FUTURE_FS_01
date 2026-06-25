import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            

           
              <span className="text-5xl font-bold">
                Rithika Madineni
              </span>
            

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-300">
              Java Full Stack Developer
            </h2>

            <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">
              I build scalable and user-focused web applications using
              Java, Spring Boot, React and MySQL.I'm constantly learning new technologies,solving real-world problems and building impactful projects.Currently seeking opportunities to contribute,learn and grow in a collabarative engineering team.
              
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href={resume}
                download
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl font-semibold shadow-lg"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition px-7 py-4 rounded-xl font-semibold"
              >
                View Projects
                <FaArrowRight />
              </a>

            </div>

            <div className="flex gap-8 mt-12 text-3xl">

              <a
                href="https://github.com/Rithikamadieni"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/rithikamadineni"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:rithikamadinei3@gmail.com"
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                <HiOutlineMail />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative flex justify-center items-center">

              <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

              <img
                src={profile}
                alt="Rithika Madineni"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-3 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;