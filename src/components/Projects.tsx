import React, { useState } from 'react';
import { 
  FolderGit2, 
  Layers, 
  CheckCircle2, 
  Database, 
  Code, 
  Sparkles, 
  Table, 
  PlusCircle, 
  Trash2, 
  Edit3, 
  FileText, 
  UserCheck, 
  Compass, 
  BarChart3, 
  ArrowRight,
  ExternalLink,
  Car,
  MapPin,
  Clock,
  Terminal,
  Activity,
  Filter
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Java' | 'Python' | 'Web'>('All');
  
  // Interactive UI mockup state for Student Mark Management System
  const [mockSubjectFilter, setMockSubjectFilter] = useState('All');

  // Interactive UI mockup state for AI Career Mentor
  const [selectedInterest, setSelectedInterest] = useState<'java' | 'web' | 'database'>('java');

  // Interactive UI mockup state for Ride Log
  const [selectedRideView, setSelectedRideView] = useState<'recent' | 'stats'>('recent');

  // Filter projects based on active technology tag
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Java') return project.technologies.includes('Java');
    if (activeFilter === 'Python') return project.technologies.includes('Python');
    if (activeFilter === 'Web') return project.technologies.some(t => ['HTML', 'CSS', 'JSP'].includes(t));
    return true;
  });

  const filterOptions: Array<'All' | 'Java' | 'Python' | 'Web'> = ['All', 'Java', 'Python', 'Web'];

  return (
    <section id="projects" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical & Academic Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl">
            Practical software projects demonstrating programming, web development, data handling, and problem-solving skills across Java and Python.
          </p>
        </div>

        {/* Technology Filter Navigation */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg gap-1">
            <div className="px-3 py-1 text-xs font-mono text-slate-500 flex items-center gap-1.5 hidden sm:inline-flex">
              <Filter className="w-3 h-3 text-cyan-400" />
              <span>Filter:</span>
            </div>
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid of 3 Project Cards */}
        {/* Desktop: 3 in a row (lg:grid-cols-3), Tablet: 2 in a row (md:grid-cols-2), Mobile: 1 in a row (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isStudentMarks = project.id === 'student-mark-management-system';
            const isCareerMentor = project.id === 'ai-career-mentor';
            const isRideLog = project.id === 'ride-log';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Section */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  
                  {/* Badge and Type Label */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                        isRideLog
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : isCareerMentor
                          ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      }`}
                    >
                      {project.badge}
                    </span>
                    
                    {/* Visual Project Icon */}
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {isStudentMarks && <Table className="w-4 h-4 text-cyan-400" />}
                      {isCareerMentor && <Compass className="w-4 h-4 text-purple-400" />}
                      {isRideLog && <Car className="w-4 h-4 text-emerald-400" />}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Clean Visual Preview Card for Each Project */}
                  <div className="mb-5 rounded-xl bg-slate-950/80 border border-slate-800/80 p-3.5 text-xs font-mono">
                    {/* Student Mark Management System Interactive/Visual Mockup */}
                    {isStudentMarks && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800">
                          <span className="text-cyan-400 font-bold">Exam Mark Viewer</span>
                          <span className="text-[10px] text-slate-500">MySQL Linked</span>
                        </div>
                        <div className="space-y-1 text-[11px]">
                          <div className="flex justify-between py-1 px-2 rounded bg-slate-900 border border-slate-800/60">
                            <span className="text-slate-300">Java Programming</span>
                            <span className="text-emerald-400 font-bold">92/100 (S)</span>
                          </div>
                          <div className="flex justify-between py-1 px-2 rounded bg-slate-900 border border-slate-800/60">
                            <span className="text-slate-300">MySQL Database</span>
                            <span className="text-cyan-400 font-bold">88/100 (A)</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 text-right">
                          CRUD Operations • Report Generator
                        </div>
                      </div>
                    )}

                    {/* AI Career Mentor Visual Mockup */}
                    {isCareerMentor && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800">
                          <span className="text-purple-400 font-bold">Career Guidance Portal</span>
                          <span className="text-[10px] text-emerald-400">Active</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800/60 space-y-1">
                          <div className="text-[10px] text-slate-400">Target Track:</div>
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>Java Full Stack</span>
                            <span className="text-[10px] text-purple-300 font-normal">95% Match</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 text-right">
                          Registration • Login • Recommendation
                        </div>
                      </div>
                    )}

                    {/* Ride Log Clean Travel Logging Visualization */}
                    {isRideLog && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800">
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <Terminal className="w-3 h-3 text-emerald-400" />
                            Python Travel Logger
                          </span>
                          <span className="text-[10px] text-slate-500">Trip Data</span>
                        </div>
                        <div className="space-y-1 text-[11px]">
                          <div className="flex justify-between py-1 px-2 rounded bg-slate-900 border border-slate-800/60">
                            <span className="text-slate-300 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-cyan-400" />
                              Campus Route Log #1
                            </span>
                            <span className="text-emerald-400 font-semibold">12.4 km</span>
                          </div>
                          <div className="flex justify-between py-1 px-2 rounded bg-slate-900 border border-slate-800/60">
                            <span className="text-slate-300 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-amber-400" />
                              Travel Log #2
                            </span>
                            <span className="text-cyan-400 font-semibold">Logged</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 text-right">
                          Trip Records • Data Handling • Python
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 flex-grow">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isRideLog
                                ? 'text-emerald-400'
                                : isCareerMentor
                                ? 'text-purple-400'
                                : 'text-cyan-400'
                            }`}
                          />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    {isRideLog ? 'Python Programming' : 'Academic Project'}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {/* Optional external links if added in data later */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs"
                        title="View Source Code"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      <span>Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Architecture & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
