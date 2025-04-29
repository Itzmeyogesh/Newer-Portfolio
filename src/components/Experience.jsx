import React from 'react';

const experienceData = [
  {
    jobTitle: 'Data Analyst Intern',
    company: 'Code Spyder Technologies',
    duration: 'Jan 2023 – Jun 2023',
    description:
      'Worked on analyzing house price prediction data and building machine learning models using regression analysis. Optimized models for accuracy and deployed them for real-time predictions.',
  },
  {
    jobTitle: 'Software Developer Intern',
    company: 'Tech Solutions Pvt Ltd',
    duration: 'Jul 2022 – Dec 2022',
    description:
      'Contributed to front-end development using React, assisted with database management, and optimized the user interface for better performance and user experience.',
  },
];

const ExperienceItem = ({ jobTitle, company, duration, description }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-2xl font-semibold">{jobTitle}</h3>
    <p className="text-xl font-medium">{company}</p>
    <p className="text-lg italic">{duration}</p>
    <p className="mt-4">{description}</p>
  </div>
);

const Experience = () => (
  <section
    id="experience"
    className="py-20 px-6 sm:px-12 lg:px-16 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 bg-cover bg-fixed"
    style={{
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <h2 className="text-4xl font-semibold text-center text-white mb-12">Experience</h2>
    <div className="max-w-screen-xl mx-auto">
      {experienceData.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  </section>
);

export default Experience;
