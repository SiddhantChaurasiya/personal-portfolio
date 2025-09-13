import React from 'react';
import SectionWrapper from './SectionWrapper';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Certifications</h2>
      <div className="space-y-12">
        {experiences.map(expCategory => (
          <div key={expCategory.category}>
            <h3 className="text-2xl font-semibold text-accent mb-6">{expCategory.category}</h3>
            <div className="relative border-l-2 border-accent/30 pl-8">
              {expCategory.items.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 bg-accent rounded-full ring-4 ring-light dark:ring-primary"></span>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">{item.company}</p>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.date}</time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;