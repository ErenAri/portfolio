import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { CERTIFICATES } from '../constants';

// Helper to render "Logos" using CSS since we don't have image assets
const IssuerLogo: React.FC<{ issuer: string }> = ({ issuer }) => {
  const isIBM = issuer.includes('IBM');
  const isStanford = issuer.includes('Stanford');
  const isDeepLearning = issuer.includes('DeepLearning.AI');
  const isAWS = issuer.includes('AWS') || issuer.includes('Amazon');
  const isImperial = issuer.includes('Imperial');

  return (
    <div className="flex items-center gap-2 mb-3">
      {/* Visual Indicator/Logo Placeholder */}
      <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xs shadow-sm border ${
        isIBM ? 'bg-blue-600 text-white border-blue-700' :
        isStanford ? 'bg-red-800 text-white border-red-900' :
        isDeepLearning ? 'bg-yellow-400 text-gray-900 border-yellow-500' :
        isImperial ? 'bg-indigo-900 text-white border-indigo-950' :
        'bg-gray-100 text-gray-600 border-gray-200'
      }`}>
        {isIBM ? 'IBM' : 
         isStanford ? 'S' : 
         isDeepLearning ? 'DL' : 
         isImperial ? 'IC' : 
         <Award className="w-4 h-4" />}
      </div>
      
      {/* Text Label */}
      <span className="font-mono text-xs text-gray-500 uppercase tracking-tight truncate max-w-[200px]" title={issuer}>
        {issuer}
      </span>
    </div>
  );
};

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Certificates</h2>
          <span className="h-px flex-1 bg-gray-200"></span>
          <span className="text-gray-400 font-mono text-sm">04</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col justify-between p-6 bg-white border border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              <div>
                <IssuerLogo issuer={cert.issuer} />
                
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                {cert.grade && (
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-mono font-medium text-gray-600">
                      Grade: <span className="text-emerald-700">{cert.grade}</span>
                    </span>
                  </div>
                )}
                {cert.tags && (
                   <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider rounded">
                     {cert.tags[0]}
                   </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;