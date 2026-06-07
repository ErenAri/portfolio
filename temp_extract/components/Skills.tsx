import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Terminal } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code2 className="w-8 h-8 text-indigo-500" />;
      case 'Frameworks': return <Globe className="w-8 h-8 text-pink-500" />;
      case 'AI & Data': return <Cpu className="w-8 h-8 text-emerald-500" />;
      case 'DevOps': return <Terminal className="w-8 h-8 text-amber-500" />;
      default: return <Code2 className="w-8 h-8" />;
    }
  };

  const categories = Object.keys(SKILLS);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-academic-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-gray-400 font-mono text-sm">01</span>
          <span className="h-px flex-1 bg-gray-200"></span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 text-right">Proficiency</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Main Title Block */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gray-900 p-8 flex flex-col justify-between text-white border border-gray-900">
            <h3 className="text-3xl font-serif leading-tight">
              A curated <br /> toolkit for <br /> modern problems.
            </h3>
            <p className="text-gray-400 text-sm font-mono mt-4">
              // CONSTANT LEARNING <br />
              // ACADEMIC DEPTH
            </p>
          </div>

          {/* Bento Grid Items */}
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 border border-gray-200 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group ${
                index === 0 || index === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">{category}</h4>
                {getIcon(category)}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {SKILLS[category as keyof typeof SKILLS].map((skill: string) => (
                  <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;