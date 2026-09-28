import React from 'react';
import { GraduationCap, BookOpen, Users, Code, Award, CheckCircle2 } from 'lucide-react';

export default function TeachingStory() {
  return (
    <section className="py-16 bg-slate-900/50 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-blue-950/40 border border-purple-500/20 p-8 sm:p-10 relative overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>Academic Leadership & Computer Science Foundations</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Rooted in Strong CS Fundamentals & Mentorship
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Before engineering high-frequency banking engines, I served as an <strong className="text-white">Assistant Professor at College of Engineering Cherthala (IHRD)</strong> (2014–2015). 
                I taught core <strong className="text-purple-300">Data Structures, Algorithms, and Web Engineering</strong>, and conducted hands-on coding labs for 
                both freshman (Semester 1) and graduating final-year (Semester 7) engineering students.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <BookOpen className="w-5 h-5 text-purple-400 mb-1.5" />
                  <div className="font-bold text-xs text-white">Data Structures</div>
                  <div className="text-[11px] text-slate-400">Arrays, Trees, Graphs & Algorithm Complexity</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Code className="w-5 h-5 text-cyan-400 mb-1.5" />
                  <div className="font-bold text-xs text-white">S1 & S7 Coding Labs</div>
                  <div className="text-[11px] text-slate-400">Hands-on C/C++, Java & Web development labs</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Users className="w-5 h-5 text-emerald-400 mb-1.5" />
                  <div className="font-bold text-xs text-white">Student Mentorship</div>
                  <div className="text-[11px] text-slate-400">Academic guidance, capstones & attendance tracking</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-center space-y-3 w-full max-w-sm">
                <Award className="w-12 h-12 text-purple-400 mx-auto" />
                <div className="text-lg font-bold text-white">Why This Matters</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Teaching data structures and mentoring hundreds of students honed my ability to explain complex architectures, lead engineering teams, and write clean, resilient, algorithmic code."
                </p>
                <div className="text-[11px] font-mono text-purple-300 pt-1">
                  120+ Engineers Mentored
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
