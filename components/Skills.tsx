
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Prowess</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Mastering the tools of tomorrow, from low-level C programming to high-level Machine Learning models.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl group hover:border-blue-500/50 transition-all cursor-default"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center glass border-white/5 group-hover:neon-glow-blue"
                    style={{ color: skill.color }}
                  >
                    <span className="font-bold text-xs">{skill.name[0]}</span>
                  </div>
                  <h3 className="text-white font-medium">{skill.name}</h3>
                </div>
                <span className="text-slate-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
