import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { 
  Building2, Calendar, MapPin, CheckCircle2, ChevronRight, 
  Briefcase, GraduationCap, Cloud, Smartphone, Landmark 
} from 'lucide-react';

const expIcons = {
  'RAKBANK (National Bank of Ras Al Khaimah)': Landmark,
  'Brams Technology': Cloud,
  'Fabi Technology': Smartphone,
  'College of Engineering Cherthala (IHRD)': GraduationCap,
};

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience & Milestones
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A proven trajectory across Digital Banking at RAKBANK UAE, Enterprise Cloud Support, 
            Multi-App Mobile Development, and Academic Mentorship in Computer Science.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Companies List */}
          <div className="lg:col-span-4 space-y-3">
            {experiences.map((exp, index) => {
              const Icon = expIcons[exp.company] || Building2;
              const isSelected = selectedExp === index;
              return (
                <button
                  key={exp.company}
                  onClick={() => setSelectedExp(index)}
                  className={`w-full p-4.5 rounded-2xl text-left transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/40 translate-x-1'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-bold text-sm tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {exp.company}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detail Pane */}
          <div className="lg:col-span-8">
            {(() => {
              const current = experiences[selectedExp];
              const Icon = expIcons[current.company] || Building2;
              return (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl animate-fadeIn">
                  
                  {/* Glowing header accent */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${current.color}`}>
                          {current.badge}
                        </span>
                        <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                          {current.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {current.role}
                      </h3>
                      <div className="text-cyan-400 font-semibold text-base mt-1">
                        {current.company}
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{current.period}</span>
                        <span className="text-slate-500">({current.duration})</span>
                      </div>
                      <div className="text-xs text-slate-400 flex items-center justify-end gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{current.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Key Contributions & Achievements */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Responsibilities & Deliverables
                    </h4>
                    <div className="space-y-2.5">
                      {current.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Tech Used */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Technologies & Competencies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
