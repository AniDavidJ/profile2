import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { personalInfo, experiences, skills } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto text-slate-100">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Professional Curriculum Vitae (CV)
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Container */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-400 font-semibold text-base mt-1">
              Senior Software Engineer — React.js & React Native Specialist
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Fintech & Digital Banking Specialist • 5+ Years Core Experience
            </p>

            {/* Contacts bar */}
            <div className="flex flex-wrap gap-4 text-xs text-slate-300 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.email}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div><strong className="text-white">Frontend & Mobile:</strong> React.js, React Native, Mobile WebViews & Native Bridges, TypeScript, TailwindCSS, Redux Toolkit.</div>
              <div><strong className="text-white">Fintech & Banking:</strong> FX Foreign Exchange Engine, International SWIFT Remittance, UAE Instant Payments, Credit Card Controls.</div>
              <div><strong className="text-white">Cloud & Engineering:</strong> Enterprise Cloud Support, RESTful APIs, Git, Vite, Performance Optimization, CI/CD.</div>
              <div><strong className="text-white">Academic Leadership:</strong> Data Structures & Algorithms, Teaching, Student Mentorship & Lab Supervision.</div>
            </div>
          </div>

          {/* Experience List */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Professional Work History
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.company} className="space-y-1.5 border-l-2 border-slate-800 pl-3">
                  <div className="flex flex-wrap justify-between items-center text-xs">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
