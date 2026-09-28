import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { Code, Landmark, Smartphone, Terminal, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { key: 'frontend', label: 'Frontend & Web', icon: Code, count: skills.frontend.length },
    { key: 'fintech', label: 'FinTech & Banking', icon: Landmark, count: skills.fintech.length },
    { key: 'mobile', label: 'Mobile & WebViews', icon: Smartphone, count: skills.mobile.length },
    { key: 'tools', label: 'Tools & CS Foundations', icon: Terminal, count: skills.tools.length },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Expertise & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive matrix of technologies mastered across 5+ years of production engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {skills[activeCategory].map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2"
            >
              <div className="flex justify-between items-center text-sm font-bold text-slate-200">
                <span>{skill.name}</span>
                <span className="font-mono text-cyan-400 text-xs">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
