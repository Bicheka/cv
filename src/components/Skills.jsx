import React from 'react';
import '../css/Skills.css'; // Create a separate CSS file for styling

const Skills = () => {
  const skills = [
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'Microservices',
    'Spring-Boot',
    'C++',
    'Docker',
    'Kubernetes',
    'ReactJS',
    'HTML5',
    'CSS3',
    'Git',
    'GitHub',
    'CI/CD',
  ];

  return (
    <div className="skills-container">
      <h2 className='page-title'>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
