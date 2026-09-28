import React from 'react';
import { stats } from '../data/portfolioData';
import { Award, Briefcase, Smartphone, ShieldCheck } from 'lucide-react';

const icons = [Award, Briefcase, Smartphone, ShieldCheck];

export default function Stats() {
  return (
    <section className="relative py-12 border-y border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-cyan-500/30 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {item.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
