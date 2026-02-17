
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_ICONS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">The Ecosystem</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {TECH_ICONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-default"
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: idx % 2 === 0 ? [0, 5, 0] : [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: idx * 0.5 
                }}
                className="w-20 h-20 md:w-24 md:h-24 glass rounded-3xl flex items-center justify-center mb-4 border-white/5 group-hover:border-blue-500/40 transition-all duration-500 shadow-xl group-hover:neon-glow-blue"
              >
                {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow the 'size' prop in cloneElement */}
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 36 })}
              </motion.div>
              <span className="text-slate-500 font-medium group-hover:text-white transition-colors uppercase text-[10px] tracking-widest">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-blue-500 rounded-full"
             initial={{ 
               top: `${Math.random() * 100}%`, 
               left: `${Math.random() * 100}%` 
             }}
             animate={{ 
               y: [0, -100], 
               opacity: [0, 1, 0] 
             }}
             transition={{ 
               duration: Math.random() * 5 + 5, 
               repeat: Infinity,
               ease: "linear"
             }}
           />
         ))}
      </div>
    </section>
  );
};

export default TechStack;
