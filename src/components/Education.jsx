import React from 'react';

const educationData = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Vivekanand College, Aurangabad',
    duration: 'July 2023 – Present',
    description: 'Currently pursuing my MCA with a focus on data science and software development.',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Deogiri College, Aurangabad',
    duration: 'July 2019 – April 2022',
    description: 'Completed my BCA with a deep interest in data analytics and machine learning.',
  },
];

const EducationItem = ({ degree, institution, duration, description }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-2xl font-semibold">{degree}</h3>
    <p className="text-xl font-medium">{institution}</p>
    <p className="text-lg italic">{duration}</p>
    <p className="mt-4">{description}</p>
  </div>
);

const Education = () => (
  <section
    id="education"
    className="py-20 px-6 sm:px-12 lg:px-16 bg-gradient-to-t from-blue-900 via-indigo-800 to-purple-700 bg-cover bg-fixed"
    style={{
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <h2 className="text-4xl font-semibold text-center text-white mb-12">Education</h2>
    <div className="max-w-screen-xl mx-auto">
      {educationData.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </div>
  </section>
);

export default Education;
