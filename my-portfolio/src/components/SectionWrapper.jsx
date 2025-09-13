import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;