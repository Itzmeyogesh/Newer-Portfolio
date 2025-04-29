import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Vite', level: 80 },
  { name: 'JavaScript', level: 95 },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden py-20 px-6"
    >
      {/* Animated Blobs */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-[30%] right-[-5rem] w-96 h-96 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-[-5rem] left-[20%] w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-blob"></div>

      {/* Glassmorphism Card */}
      <motion.div
        className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-12 w-full text-left border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Profile and Objective */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              About Me
            </h2>
            <p className="text-base sm:text-lg mb-6 leading-relaxed text-gray-200">
              I'm a passionate web developer with hands-on experience in building modern web applications using
              <span className="text-pink-400 font-semibold"> React</span>, 
              <span className="text-purple-400 font-semibold"> Tailwind CSS</span>, and 
              <span className="text-pink-400 font-semibold"> Vite</span>. I focus on creating stunning, responsive, and user-friendly web experiences.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
              Specializing in front-end technologies, I'm constantly exploring new trends with 
              <span className="text-purple-400 font-semibold"> JavaScript</span> and 
              <span className="text-pink-400 font-semibold"> modern frameworks</span>. My passion for learning and building keeps me inspired.
            </p>

            {/* Objective */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200">Objective</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
              My goal is to apply my expertise in web development to create impactful digital solutions that benefit users and businesses alike.
            </p>

            {/* Profile */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200">Profile</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              With a background in computer applications, I’m passionate about crafting intuitive user experiences and building efficient, scalable applications. I am always honing my skills to stay ahead of the curve in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Right Column: Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-200">Skills</h3>
            {skills.map((skill) => (
              <motion.div 
                key={skill.name} 
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-pink-400 to-purple-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    whileHover={{ background: 'linear-gradient(to right, #FF70A6, #8A2BE2)' }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
