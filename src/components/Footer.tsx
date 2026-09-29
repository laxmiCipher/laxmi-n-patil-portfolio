import React from 'react';
import { Linkedin, Github, ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Computer Science & Engineering Student | Java Full Stack Development
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-2"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">LinkedIn</span>
            </a>

            <a
              id="footer-github-link"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-violet-400 hover:border-violet-500/40 transition-colors flex items-center gap-2"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">GitHub</span>
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-2"
              aria-label="Email address"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">Email</span>
            </a>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center cursor-pointer"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with modern web standards • Alva's Institute of Engineering and Technology (AIET)
          </div>
        </div>

      </div>
    </footer>
  );
};
