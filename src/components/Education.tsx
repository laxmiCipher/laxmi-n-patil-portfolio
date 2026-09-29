import React from 'react';
import { GraduationCap, Calendar, Award, Building, BookOpen, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Education Timeline & Degree Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/20 border border-slate-800 backdrop-blur-md shadow-2xl overflow-hidden">
            
            {/* Top Badge & Duration */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                    Undergraduate Program
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Bachelor of Engineering (B.E.)
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Expected Graduation: {personalInfo.expectedGraduation}</span>
              </div>
            </div>

            {/* Major & Institution */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-100 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>Computer Science and Engineering</span>
                  </h4>
                  
                  <p className="text-sm sm:text-base text-slate-300 font-medium mt-2 flex items-center gap-2">
                    <Building className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{personalInfo.college}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Rigorous foundational coursework in Computer Science principles, Object-Oriented Software Design, Database Management Systems, Data Structures & Algorithms, and modern software engineering practices.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                    B.E. Computer Science
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                    AIET Campus
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                    2024 – 2028
                  </span>
                </div>
              </div>

              {/* Prominent CGPA Highlight Box */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-slate-950/80 border border-amber-500/30 text-center shadow-lg relative">
                <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 mb-2">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  8.5 <span className="text-base sm:text-lg text-slate-400 font-normal">/ 10</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono mt-1">
                  Current CGPA
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Consistent academic excellence in Computer Science and Engineering
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
