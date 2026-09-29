import React from 'react';
import { Award, CheckCircle2, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Coursework & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
        </div>

        {/* Certification Cards */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-indigo-950/30 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-slate-700 transition-all duration-300">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-950/60 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Online Learning Platform
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Coursera Certifications
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Learning</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Completed relevant online courses and assignments.
            </p>

            {/* Credential Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Relevant Coursework & Concept Modules</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hands-on Practical Programming Assignments</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
