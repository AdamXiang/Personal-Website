import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-accent/10 rounded-lg text-accent">
          <FolderGit2 size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-slate-100 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <div className="flex gap-2">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                    <Github size={18} />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-slate-400 text-sm mb-6 leading-relaxed h-20 overflow-hidden">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs text-accent bg-accent/10 rounded-full">
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
