import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light text-center p-4">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Siddhant Chaurasiya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;