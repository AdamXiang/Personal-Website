import React from 'react';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-accent/10 rounded-lg text-accent">
          <Cpu size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((category, idx) => (
          <div key={idx} className="bg-slate-800/30 rounded-xl p-6 border border-slate-800/50">
            <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-700 pb-2">
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-sm border border-slate-800 hover:border-accent/50 hover:text-accent transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
