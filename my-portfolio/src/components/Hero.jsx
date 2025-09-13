import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo } from '../data/info';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-light dark:bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-4xl text-accent mb-6 h-16 md:h-24">
            <Typewriter
              words={[personalInfo.title, personalInfo.tagline]}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          
          {/* THIS IS THE BUTTON CODE THAT WAS LIKELY MISSING */}
          <motion.a
            href={personalInfo.resume}
            download
            className="inline-block bg-accent text-gray font-bold mt-2 py-3 px-8 rounded-full transition-transform duration-300 border-2 border-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;