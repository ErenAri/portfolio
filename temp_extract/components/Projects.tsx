import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Projects</h2>
           <span className="h-px flex-1 bg-gray-200"></span>
           <span className="text-gray-400 font-mono text-sm">02</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 p-8 hover:border-indigo-600 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              <div className="mb-6 text-gray-400 group-hover:text-indigo-600 transition-colors">
                <FolderGit2 className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                    <span 
                        key={tag} 
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-gray-50 text-gray-600 border border-gray-100"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                {project.stars && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;