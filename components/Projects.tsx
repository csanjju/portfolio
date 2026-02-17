
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-500">A collection of academic and personal experiments.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Github size={20} />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-medium">Explore More on GitHub</a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-3xl overflow-hidden cursor-pointer group border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded text-blue-400 font-bold border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <div 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden shadow-2xl border-white/10"
            >
              <button 
                className="absolute top-6 right-6 z-10 p-2 glass rounded-full hover:bg-white/10 text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh]">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold flex items-center gap-2 mb-3">
                        <Code size={18} className="text-blue-500" />
                        Built with
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.github && (
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-colors"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
