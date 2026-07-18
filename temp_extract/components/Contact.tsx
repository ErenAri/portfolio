import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-900 to-gray-900 rounded-2xl p-8 md:p-12 text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Connect</h2>
          <p className="text-indigo-100 mb-8 leading-relaxed text-lg">
            I am always open to discussing new research opportunities, software development roles, or collaborative projects.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:contact@example.com"
              className="w-full md:w-auto px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <a 
              href="https://www.linkedin.com/in/eren-ari/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
             <a 
              href="https://github.com/ErenAri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;