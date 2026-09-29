import React from 'react';
import { Target, Server, Database, Layout, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const CareerInterest: React.FC = () => {
  return (
    <section id="career-interest" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium">
            <Target className="w-3.5 h-3.5" />
            <span>Professional Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Interest
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        </div>

        {/* Career Focus Visual Architecture Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/20 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  Primary Domain Focus
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1">
                  Java Full Stack Development
                </h3>
              </div>

              <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shrink-0">
                Placement & Internship Focus
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Interested in building practical software applications and strengthening Java-based development skills.
            </p>

            {/* 3-Tier Architecture Flow Visual */}
            <div className="mt-8 pt-8 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Full Stack Tier Specialization
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Tier 1: Frontend */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Layout className="w-4 h-4" />
                      <span className="text-xs font-bold font-mono uppercase">1. Web Interface Tier</span>
                    </div>
                    <div className="text-sm font-semibold text-white">HTML & CSS</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Semantic web pages, forms, and responsive styling.
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-cyan-300/80">
                    Client Tier
                  </div>
                </div>

                {/* Tier 2: Application Tier */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/40 shadow-sm shadow-indigo-950/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <Server className="w-4 h-4" />
                      <span className="text-xs font-bold font-mono uppercase">2. Core Business Tier</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Java & JSP</div>
                    <p className="text-xs text-slate-400 mt-1">
                      OOP classes, servlets/JSP logic, and application workflows.
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-indigo-300/80">
                    Application Tier
                  </div>
                </div>

                {/* Tier 3: Database Tier */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <Database className="w-4 h-4" />
                      <span className="text-xs font-bold font-mono uppercase">3. Data Tier</span>
                    </div>
                    <div className="text-sm font-semibold text-white">MySQL Database</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Relational tables, ACID transactions, and SQL queries.
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-purple-300/80">
                    Persistence Tier
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Commitment */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Committed to writing robust Java code, developing responsive user interfaces, and designing clean relational database schemas.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
