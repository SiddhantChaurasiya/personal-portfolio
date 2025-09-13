import React from 'react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white/50 dark:bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-auto flex justify-start space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;