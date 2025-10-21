import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript", "Bootstrap"];
  const backendSkills = ["Node.js",  "MongoDB", "Express.js", "Firebase", "Git", "Github", "VS Code", "Postman"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* About Me Heading */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Skills Section */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <p className="text-gray-300 mb-6 flex  justify-center">
              
              Here are some of my skills, I have been working on for the past 2 years
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend / Others Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend / Others</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-6">🏫 Education</h3>

            <div className="relative border-l-2 border-blue-500 ml-4">
              {/* 10th */}
              <div className="mb-8 ml-6">
                <div className="absolute -left-4 w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
                <p className="font-semibold text-gray-100">B.tech in Information Technology</p>
                <p className="text-gray-300">Aligarh College of Engineering and Technology, Aligarh (2020-2024)</p>
               <ul className="text-gray-500"><li><h6>CGPA: 7.79</h6></li></ul>
              </div>

              {/* 12th */}
              <div className="mb-8 ml-6">
                <div className="absolute -left-4 w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
                <p className="font-semibold text-gray-100">Secondary</p>
                <p className="text-gray-300">Aligarh Muslim University (A.M.U), Aligarh (2019-2020)</p>
                <ul className="text-gray-500"><li><h6>First Division</h6></li></ul>
              </div>

              {/* B.Tech */}
              <div className="mb-8 ml-6">
                <div className="absolute -left-4 w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
                <p className="font-semibold text-gray-100">Higher Secondary</p>
                <p className="text-gray-300">Blue Bird Senior Secondary School, Aligarh (2017-2018)</p>
                <ul className="text-gray-500"><li><h6>Percentage: 82.2%</h6></li></ul>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
