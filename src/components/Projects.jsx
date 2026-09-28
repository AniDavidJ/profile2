import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, ExternalLink, ArrowRight, Sparkles, 
  CheckCircle2, X, Landmark, Smartphone, Cloud, GraduationCap 
} from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Fintech & Banking', 'Mobile & WebView', 'Cloud', 'Academic'];

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'Fintech & Banking') return proj.category.includes('Fintech') || proj.category.includes('Banking') || proj.category.includes('Payments');
    if (filter === 'Mobile & WebView') return proj.category.includes('Mobile');
    if (filter === 'Cloud') return proj.category.includes('Cloud');
    if (filter === 'Academic') return proj.category.includes('Academic');
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-900/40 dark:bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Work & Implementations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Projects & Systems
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              From flagship digital banking features at RAKBANK to multi-tenant mobile applications and cloud architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-cyan-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 group relative"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 font-semibold">
                    {project.company}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-mono font-medium text-[11px]">
                  {project.stats}
                </span>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1 font-semibold text-slate-300 hover:text-white transition-colors group/btn"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-2xl w-full bg-slate-900 rounded-3xl border border-slate-700 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400">• {activeModalProject.company}</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalProject.summary}
              </p>

              {/* In-depth Architecture Bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technical Architecture & Achievements
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Stack & Tooling
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
