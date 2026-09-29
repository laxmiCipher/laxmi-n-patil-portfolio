import React from 'react';
import { User, Sparkles, CheckCircle2, Code2, Binary, Layers, Target, Compass } from 'lucide-react';
import { careerObjective, currentFocus } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Statement Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Career Objective Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Compass className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Career Objective
                </h3>
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                {careerObjective}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-slate-800/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Strong interest in software development & problem solving
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Hands-on experience developing Java and Python projects
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Strengthening Data Structures & Algorithms in Java
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Skilled in Java, C, Python, HTML, CSS, and MySQL
                  </span>
                </div>
              </div>
            </div>

            {/* Practical Approach Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-indigo-950/30 border border-slate-800">
              <h4 className="text-sm font-semibold text-slate-200 mb-2 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Engineering Discipline & Mindset
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dedicated to structured software development, writing clean Java code with solid object-oriented principles, and applying relational database modeling with MySQL to build practical software systems.
              </p>
            </div>

          </div>

          {/* Current Focus Sidebar Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Current Focus
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                  Active Learning
                </span>
              </div>

              <div className="space-y-3.5">
                {currentFocus.map((focus, idx) => {
                  const icons = {
                    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
                    Binary: <Binary className="w-5 h-5 text-indigo-400" />,
                    Layers: <Layers className="w-5 h-5 text-purple-400" />,
                  };
                  return (
                    <div
                      key={focus.title}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                          {icons[focus.icon as keyof typeof icons] || <Code2 className="w-5 h-5 text-cyan-400" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {focus.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {focus.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core Competency Quick Pill Box */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
              <div className="text-slate-400 font-medium mb-2 font-mono">Academic Foundation</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Object-Oriented Programming</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Relational Database Systems</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Algorithmic Problem Solving</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
