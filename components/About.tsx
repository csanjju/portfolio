
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative glass p-4 rounded-3xl border border-white/10">
                <img 
                  src="https://picsum.photos/seed/sanjay/600/800" 
                  alt="Sanjay Kumar" 
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Currently pursuing my <span className="text-blue-400 font-medium">BCA with a specialization in AI & ML</span> at T.S. Mishra University. I am passionate about bridging the gap between hardware and software through intelligent systems.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                  <GraduationCap />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Education</h4>
                  <p className="text-slate-500">T.S. Mishra University - BCA (AI & ML)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-slate-500">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                  <Award />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Focus Areas</h4>
                  <p className="text-slate-500">Deep Learning, Golang Backends, Database Systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
