import React from 'react';
import { 
  ArrowRight, ShieldCheck, Smartphone, Landmark, 
  Terminal, Sparkles, Download, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Senior Software Engineer</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>5+ Years Experience</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Landmark className="w-3.5 h-3.5" />
                <span>RAKBANK UAE (2021–2026)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Architecting High-Volume{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                FinTech & Mobile
              </span>{' '}
              Experiences.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialized in <strong className="text-slate-900 dark:text-white font-semibold">React.js, React Native & Mobile WebViews</strong>. 
              Proven expertise at <strong className="text-slate-900 dark:text-white font-semibold">RAKBANK</strong> delivering mission-critical Foreign Exchange (FX), 
              International Transfers, Credit Card systems, and leading the flagship <strong className="text-cyan-400 font-semibold">Mobile App Brand Refresh</strong>.
            </p>

            {/* Career Badges / Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Stack</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">React & Native</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Domain</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">FinTech & FX</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Previous</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">Brams Tech Dubai</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Academics</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">Ex-Asst. Professor</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>View RAKBANK Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulator"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:scale-[1.02]"
              >
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>Try Live App Demo</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View Resume / CV</span>
              </button>
            </div>

            {/* Location & Availability footnote */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Available for Full-time Roles & Contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>📍 Dubai, UAE & Kerala</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Fintech Terminal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 p-5 shadow-2xl shadow-cyan-950/40 relative backdrop-blur-xl group hover:border-slate-700 transition-all">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-1">fintech_profile.tsx</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                  RAKBANK Core
                </span>
              </div>

              {/* Card Body with Live Animated Simulation Info */}
              <div className="space-y-3.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500">Primary Module</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live in Prod
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-100">
                    FX Foreign Exchange & Deals
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Multi-currency spot rates, treasury feeds, AED-INR-USD spread calculation & zero-latency trade booking.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500">Design System</span>
                    <span className="text-cyan-400">100% Complete</span>
                  </div>
                  <div className="text-sm font-bold text-slate-100">
                    Brand Refresh & Theme Engine
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Cross-platform mobile redesign, typography upgrade, new logo integration, and unified WebView Bridge.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500">Payments & Cards</span>
                    <span className="text-amber-400">High Security</span>
                  </div>
                  <div className="text-sm font-bold text-slate-100">
                    Remittance & Credit Cards Hub
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    SWIFT rails, UAE IPP local instant transfers, biometrics, card freeze/unfreeze, and statement previews.
                  </p>
                </div>

                {/* Bottom Quick Action */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-sans border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Verified Production Experience</span>
                  </div>
                  <a href="#simulator" className="text-slate-300 hover:text-white flex items-center gap-0.5">
                    Test Simulator <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
