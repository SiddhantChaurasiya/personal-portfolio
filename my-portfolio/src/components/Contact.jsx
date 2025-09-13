import React from 'react';
import SectionWrapper from './SectionWrapper';
import { socialLinks } from '../data/info';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
      {/* By adding w-full, the form will now take up all available space within its parent container */}
      <div className="w-full max-w-xl mx-auto">
        <form 
          action="https://formspree.io/f/xvgbylwy" // Replace with your Formspree form ID
          method="POST"
          className="bg-white/50 dark:bg-secondary p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-md bg-light dark:bg-primary border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md bg-light dark:bg-primary border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 rounded-md bg-light dark:bg-primary border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" required></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-600 cursor-pointer text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-colors duration-300">
            Send Message
          </button>
        </form>
        <div className="text-center mt-8">
            <p className="mb-4">Or reach out on my social platforms:</p>
            <div className="flex justify-center space-x-6">
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaLinkedin size={32} /></a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaGithub size={32} /></a>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

