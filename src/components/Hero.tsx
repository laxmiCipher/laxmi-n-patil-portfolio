import React from 'react';
import { ArrowDown, Mail, FolderGit2, Sparkles, CheckCircle2, Copy, Check, Terminal, Code, Database, Server, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenQuickResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickResume }) => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/20 to-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full" />

        {/* Subtle Engineering Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Badge */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-sm shadow-emerald-950/40 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open to Internship & Placement Opportunities</span>
            </div>

            {/* Salutation & Name */}
            <div className="space-y-2">
              <p className="text-cyan-400 font-mono font-medium text-sm sm:text-base tracking-wide flex items-center gap-2">
                <span>Hi, I'm</span>
                <span className="inline-block w-8 h-[2px] bg-cyan-500/60"></span>
              </p>
              
              <h1
                id="hero-developer-name"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                {personalInfo.name}
              </h1>

              <div className="pt-2">
                <h2
                  id="hero-main-title"
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent"
                >
                  Computer Science & Engineering Student
                </h2>
                <h3
                  id="hero-supporting-title"
                  className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mt-1 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 inline" />
                  <span>Java Full Stack Development Enthusiast</span>
                </h3>
              </div>
            </div>

            {/* Introduction Statement */}
            <p
              id="hero-intro-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Practicing and experienced across Java and Python development, web technologies, database management, and problem solving — with a primary career focus in Java Full Stack Development.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                AIET (Expected 2028)
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                CGPA: 8.5 / 10
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Java • Python • MySQL • DSA
              </span>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <button
                id="hero-btn-view-projects"
                type="button"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-950/60 hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </button>

              <button
                id="hero-btn-view-resume"
                type="button"
                onClick={onOpenQuickResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-700/60 hover:border-cyan-500 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View / Download Resume</span>
              </button>

              <button
                id="hero-btn-contact"
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact</span>
              </button>

              <button
                id="hero-btn-copy-email"
                type="button"
                onClick={copyEmail}
                title="Copy Email Address"
                className="px-3.5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Fast Email Link indicator */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
              <span>Direct Email:</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

          </div>

          {/* Right Column: Code & Architecture Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div
              id="hero-code-terminal-card"
              className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden group hover:border-slate-700 transition-colors duration-300"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-cyan-400" />
                    StudentMarkService.java
                  </span>
                </div>
                <div className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                  Java 17 • OOP
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <div className="text-slate-500 select-none mb-1">
                  // Java Full Stack Developer Profile
                </div>
                <div>
                  <span className="text-purple-400">public class</span>{' '}
                  <span className="text-cyan-300 font-semibold">LaxmiNPatil</span>{' '}
                  <span className="text-slate-400">&#123;</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-purple-400">private final String</span>{' '}
                  <span className="text-slate-200">degree</span> ={' '}
                  <span className="text-emerald-300">"B.E. CSE (2024-2028)"</span>;
                </div>

                <div className="pl-4">
                  <span className="text-purple-400">private final double</span>{' '}
                  <span className="text-slate-200">cgpa</span> ={' '}
                  <span className="text-amber-300">8.5</span>;
                </div>

                <div className="pl-4">
                  <span className="text-purple-400">private String[]</span>{' '}
                  <span className="text-slate-200">coreStack</span> = &#123;
                  <span className="text-emerald-300">"Java"</span>,{' '}
                  <span className="text-emerald-300">"MySQL"</span>,{' '}
                  <span className="text-emerald-300">"JSP"</span>,{' '}
                  <span className="text-emerald-300">"DSA"</span>&#125;;
                </div>

                <div className="pl-4 pt-2 text-slate-500 select-none">
                  // Primary Career Objective
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">public void</span>{' '}
                  <span className="text-cyan-300">pursueOpportunities</span>() &#123;
                </div>
                <div className="pl-8">
                  <span className="text-indigo-300">System</span>.out.println(
                  <span className="text-emerald-300">
                    "Building reliable, scalable Java software solutions."
                  </span>
                  );
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Terminal Footer Highlights */}
              <div className="px-4 py-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ready for Placement & Internships</span>
                </div>
                <div className="text-slate-400">
                  MySQL • Git
                </div>
              </div>
            </div>

            {/* Quick Stats Grid Under Terminal */}
            <div className="grid grid-cols-3 gap-2.5 mt-3.5">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-base sm:text-lg font-bold text-white font-mono">8.5 / 10</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Current CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono">2028</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Graduation</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-base sm:text-lg font-bold text-purple-400 font-mono">Java</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Full Stack</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
