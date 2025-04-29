import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';  // Import Education Section
import Experience from './components/Experience';  // Import Experience Section

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-red-500 text-white min-h-screen overflow-x-hidden">
        {/* Navbar always on top */}
        <div className="fixed w-full top-0 left-0 z-50">
          <Navbar />
        </div>

        <div className="pt-16 flex">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-16 fixed top-16 left-0 h-screen bg-gray-800">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 ml-0 md:ml-32 overflow-y-auto h-screen">
            {/* Home Section */}
            <section
              id="home"
              className="w-full min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('https://www.example.com/home-background.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: `center ${scrollY * 0.5}px`, // Adjust parallax speed here
                backgroundSize: 'cover',
              }}
            >
              <Home />
            </section>

            {/* About Section */}
            <section
              id="about"
              className="w-full min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('https://www.example.com/about-background.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: `center ${scrollY * 0.4}px`, // Adjust parallax speed here
                backgroundSize: 'cover',
              }}
            >
              <About />
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="w-full min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('https://www.example.com/projects-background.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: `center ${scrollY * 0.3}px`, // Adjust parallax speed here
                backgroundSize: 'cover',
              }}
            >
              <Projects />
            </section>

            {/* Skills Section */}
            <section
              id="skills"
              className="w-full min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('https://www.example.com/skills-background.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: `center ${scrollY * 0.2}px`, // Adjust parallax speed here
                backgroundSize: 'cover',
              }}
            >
              <Skills />
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="w-full min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('https://www.example.com/education-background.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: `center ${scrollY * 0.1}px`, // Adjust parallax speed here
                backgroundSize: 'cover',
              }}
            >
              <Education />
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="w-full min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('https://www.example.com/experience-background.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: `center ${scrollY * 0.1}px`, // Adjust parallax speed here
                backgroundSize: 'cover',
              }}
            >
              <Experience />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="w-full min-h-screen bg-gradient-to-t from-gray-900 to-transparent"
              
            >
              <div className="w-full max-w-5xl">
                <Contact />
              </div>
            </section>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
