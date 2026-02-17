
import React from 'react';
import { Cpu } from 'lucide-react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2 text-blue-500 font-bold text-xl">
            <Cpu size={24} />
            <span className="text-white tracking-tighter">SANJAY<span className="text-blue-500">.AI</span></span>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Sanjay Kumar. Built with React & AI.
          </p>

          <div className="flex items-center gap-4">
            {SOCIALS.map(social => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
