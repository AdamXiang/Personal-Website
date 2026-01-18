import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-accent/10 rounded-lg text-accent">
          <Briefcase size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white">Experience</h3>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-3 space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-accent group-hover:bg-accent transition-colors duration-300"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-slate-100 group-hover:text-accent transition-colors">
                {exp.role}
              </h4>
              <span className="text-sm font-mono text-slate-500 mt-1 sm:mt-0">{exp.period}</span>
            </div>
            
            <div className="text-base text-slate-400 font-medium mb-3">{exp.company}</div>
            
            <ul className="list-disc pl-5 mb-4 text-slate-400 text-sm md:text-base space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};