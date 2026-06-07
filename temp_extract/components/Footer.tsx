import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-center">
      <p className="text-gray-500 text-sm font-light">
        © {new Date().getFullYear()} Eren Ari. Built with React, Tailwind & Gemini.
      </p>
    </footer>
  );
};

export default Footer;