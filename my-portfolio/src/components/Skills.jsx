import React from 'react';
import SectionWrapper from './SectionWrapper';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white/50 dark:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-accent mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;