import React from 'react';
import { X, CheckCircle2, Database, Code2, Server, Layers, ExternalLink, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>

          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Implementation Details */}
        <div className="space-y-6 text-sm">
          {/* Architecture Overview */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>System Architecture & Design</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Functional Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Implemented Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Database Schema (if applicable) */}
          {project.databaseSchema && project.databaseSchema.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Database Schema Overview</span>
              </h3>
              <div className="space-y-2 bg-slate-950/70 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                {project.databaseSchema.map((table, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400">❖</span>
                    <span>{table}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Highlights */}
          {((project.highlights && project.highlights.length > 0) ||
            (project.javaHighlights && project.javaHighlights.length > 0)) && (
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Technical Implementation Highlights</span>
              </h3>
              <div className="space-y-2">
                {(project.highlights || project.javaHighlights || []).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>View Source Code</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span>Academic & Practical Project Showcase</span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
