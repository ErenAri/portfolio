import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Experience</h2>
          <span className="h-px flex-1 bg-gray-200"></span>
          <span className="text-gray-400 font-mono text-sm">01</span>
        </div>

        <div className="relative border-l border-gray-200 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-white border-2 border-gray-300 rounded-full group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors"></div>

              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                <div className="font-mono text-sm text-gray-500 pt-1 uppercase tracking-wide">
                  {exp.period}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-gray-700 font-medium mb-4">{exp.company}</div>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-mono text-gray-600 uppercase tracking-tight">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;