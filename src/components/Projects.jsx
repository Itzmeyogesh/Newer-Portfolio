import React, { useState } from 'react';

// Updated project data with detailed descriptions and skills
const projects = [
  {
    title: 'Wine Quality Prediction',
    description: 'Predicted wine quality using machine learning techniques and identified key factors affecting quality. Conducted exploratory data analysis and evaluated model performance.',
    link: 'https://link-to-project-1.com',
    image: '/Public/Wine.jpg',
    skills: 'Machine Learning, Data Analysis, Python, Scikit-learn, Pandas',
  },
  {
    title: 'Amazon Product Reviews Sentiment Analysis',
    description: 'Analyzed Amazon reviews with NLP techniques to determine sentiment and customer satisfaction drivers. Focused on text preprocessing and sentiment classification.',
    link: 'https://link-to-project-2.com',
    image: '/Public/Sentiment.jpg',
    skills: 'Sentiment Analysis, Text Preprocessing, Python, NLTK, Scikit-learn',
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'Created Power BI dashboards to visualize employee data for HR decision-making. Focused on data visualization, dashboard design, and reporting.',
    link: 'https://link-to-project-3.com',
    image: '/Public/Hr.jpg',
    skills: 'Data Visualization, Dashboard Design, Power BI',
  },
];

// Project card component to display individual projects
const ProjectCard = ({ title, description, link, image, skills }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl text-white font-semibold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">
        <strong>Key Skills:</strong> {skills}
      </p>
      <button
        onClick={toggleModal}
        className="mt-4 inline-block text-blue-400 hover:text-blue-600 transition-colors"
      >
        Show Description
      </button>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-400 hover:text-blue-600 transition-colors"
      >
        View Project
      </a>

      {/* Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-500 mb-4">
              <strong>Key Skills:</strong> {skills}
            </p>
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main projects section
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-900">
      <h2 className="text-4xl font-semibold text-center text-white mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
