import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, BookOpen, Download } from 'lucide-react';
import { SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-20 bg-grid-pattern border-x border-gray-200/50">
      
      {/* Decorative lines - Added pointer-events-none to prevent blocking clicks */}
      <div className="absolute top-0 left-6 w-px h-full bg-gray-200/50 hidden lg:block pointer-events-none"></div>
      <div className="absolute top-0 right-6 w-px h-full bg-gray-200/50 hidden lg:block pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl relative z-10 pointer-events-auto"
      >
        <div className="flex items-center gap-3 mb-6">
           <span className="w-12 h-px bg-indigo-600"></span>
           <span className="font-mono text-sm font-medium text-indigo-600 tracking-wider uppercase">Researcher & Engineer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
          Crafting logic <br />
          <span className="text-gray-400 italic font-light">into</span> <span className="gradient-text">reality.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed mb-10">
          I bridge the gap between <span className="font-medium text-gray-900 border-b-2 border-indigo-100">academic rigor</span> and <span className="font-medium text-gray-900 border-b-2 border-indigo-100">product velocity</span>. Currently building scalable AI systems.
        </p>

        <div className="flex flex-wrap gap-4 relative z-20">
          <a 
            href="#projects"
            className="group bg-gray-900 text-white px-8 py-4 rounded-none border border-gray-900 font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-colors text-gray-600 cursor-pointer z-20"
                aria-label={social.platform}
              >
                {social.icon === 'github' && <Github className="w-5 h-5" />}
                {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                {social.icon === 'book' && <BookOpen className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;