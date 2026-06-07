import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../constants';

const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-24 px-6 md:px-12 lg:px-24 bg-academic-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-gray-400 font-mono text-sm">03</span>
          <span className="h-px flex-1 bg-gray-200"></span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 text-right">Publications</h2>
        </div>

        <div className="space-y-4">
          {ARTICLES.map((article, index) => (
            <motion.a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={article.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block group bg-white p-6 md:p-8 border border-gray-200 hover:border-gray-900 transition-colors duration-300 relative"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gray-500 uppercase tracking-wider">
                        <span className="text-indigo-600">{article.platform}</span>
                        <span>/</span>
                        <span>{article.date}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors font-serif">
                        {article.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        {article.summary}
                    </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors self-start md:self-center" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;