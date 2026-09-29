import React from 'react';
import { 
  Code, 
  Coffee, 
  Cpu, 
  Globe, 
  Palette, 
  Database, 
  Boxes, 
  GitBranch, 
  Layers,
  Sparkles,
  Check,
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      default:
        return <Code className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl">
            Core technologies and foundational skills developed through academic coursework and practical project implementations.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className={`rounded-2xl p-6 bg-slate-900/80 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                cat.skills.some((s) => s.highlight)
                  ? 'border-indigo-500/40 hover:border-indigo-400/60 shadow-indigo-950/20'
                  : 'border-slate-800 hover:border-slate-700 shadow-black/40'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Cards within Category */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        skill.highlight
                          ? 'bg-slate-950/90 border-cyan-500/30'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                          {getIcon(skill.icon)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white">
                              {skill.name}
                            </h4>
                            {skill.highlight && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                                Core
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hands-on Application Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Synergy Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-indigo-950/30 to-slate-900/90 border border-slate-800 text-center">
          <h4 className="text-sm font-semibold text-slate-200 font-mono flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Integrated Java Full Stack Competencies</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mt-1.5">
            Combining Java backend business logic with JSP web layers, MySQL database storage, and foundational HTML/CSS interfaces.
          </p>
        </div>

      </div>
    </section>
  );
};
