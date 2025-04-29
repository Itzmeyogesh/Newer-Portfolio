import React from 'react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🛢️' },
      { name: 'JavaScript', icon: '💻' },
    ],
  },
  {
    category: 'Data Visualization',
    skills: [
      { name: 'Power BI', icon: '📊' },
      { name: 'Matplotlib', icon: '📈' },
      { name: 'Seaborn', icon: '🌊' },
    ],
  },
  {
    category: 'Data Tools & Libraries',
    skills: [
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Scikit-learn', icon: '🧠' },
    ],
  },
  {
    category: 'Platforms & Databases',
    skills: [
      { name: 'Azure', icon: '☁️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🗄️' },
    ],
  },
];

const SkillsCategory = ({ category, skills }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-800 text-white py-3 px-4 rounded-md shadow hover:shadow-lg transition duration-300 hover:scale-105"
        >
          <span className="text-2xl mr-3">{skill.icon}</span>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-t from-blue-900 via-indigo-800 to-purple-700"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">My Skills</h2>
      <div className="max-w-6xl mx-auto">
        {skillsData.map((skillCategory, index) => (
          <SkillsCategory
            key={index}
            category={skillCategory.category}
            skills={skillCategory.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
