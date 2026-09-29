import React from 'react';
import { Briefcase, GraduationCap, Award, Code, CheckCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const RecruiterSnapshot: React.FC = () => {
  return (
    <section id="recruiter-quick-view" className="py-6 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-4 sm:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                  Recruiter 15-Second Executive Summary
                </h3>
                <p className="text-xs text-slate-400">
                  Quick profile briefing for internship coordinators & talent acquisition specialists
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5" />
                Seeking Internships & Placement
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Candidate & Target */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-slate-400 font-medium">Candidate</div>
              <div className="text-sm font-bold text-white mt-1">{personalInfo.name}</div>
              <div className="text-cyan-400 font-mono text-[11px] mt-0.5">{personalInfo.careerInterest}</div>
            </div>

            {/* Academic Credential */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-slate-400 font-medium">Education & Degree</div>
              <div className="text-sm font-bold text-white mt-1">B.E. in Computer Science</div>
              <div className="text-slate-300 text-[11px] mt-0.5 truncate" title={personalInfo.college}>
                AIET • Graduating {personalInfo.expectedGraduation}
              </div>
            </div>

            {/* GPA / Performance */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-slate-400 font-medium">Academic CGPA</div>
              <div className="text-sm font-bold text-amber-300 mt-1">{personalInfo.cgpa}</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Alva's Institute of Engg. & Tech.</div>
            </div>

            {/* Quick Contact */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
              <div className="text-slate-400 font-medium">Direct Inquiries</div>
              <div className="flex items-center gap-3 mt-1.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  title="Direct Phone Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  title="LinkedIn Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
