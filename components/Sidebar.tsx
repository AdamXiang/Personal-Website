import React from 'react';
import { PROFILE } from '../constants';
import { MapPin, Mail, Linkedin, Github, Download } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <header className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/3 xl:w-1/4 bg-primary p-8 flex flex-col justify-between overflow-y-auto border-r border-slate-800 z-10">
      <div>
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
          <img 
            src={PROFILE.avatarUrl} 
            alt={PROFILE.name} 
            className="w-full h-full object-cover rounded-full ring-4 ring-slate-800 shadow-xl"
          />
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-primary" title="Available for work"></div>
        </div>

        {/* Title Info */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-white mb-2">{PROFILE.name}</h1>
          <h2 className="text-xl text-accent font-medium mb-4">{PROFILE.title}</h2>
          
          <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-6 text-sm">
            <MapPin size={16} />
            <span>{PROFILE.location}</span>
          </div>

          <p className="text-slate-400 leading-relaxed mb-8 text-sm lg:text-base">
            {PROFILE.summary}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition">
            <Github size={20} />
          </a>
          <a href={PROFILE.socials.email} className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition">
            <Mail size={20} />
          </a>
        </div>

        <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition flex items-center justify-center gap-2 group">
          <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          <span>Download Resume</span>
        </button>
      </div>
    </header>
  );
};
