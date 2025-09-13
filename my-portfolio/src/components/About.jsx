import React from 'react';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/info';
import { techStack } from '../data/skills';

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 text-lg text-center md:text-left">
          <p>{personalInfo.about}</p>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-accent">My Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {techStack.map(tech => (
                    <div key={tech.name} className="flex flex-col items-center p-2" title={tech.name}>
                        <span className={`text-4xl text-gray-500 transition-colors duration-300 ${tech.hoverClass} cursor-pointer`}>
                            {tech.icon}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

