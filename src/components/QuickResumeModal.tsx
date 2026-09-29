import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, ExternalLink, GraduationCap, Code2, FolderGit2, Award, CheckCircle, FileText, Check } from 'lucide-react';
import { personalInfo, careerObjective, skillCategories, projects } from '../data/portfolioData';

interface QuickResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickResumeModal: React.FC<QuickResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  // Generate plain-text resume content
  const generateTextResume = () => {
    return `===============================================================
${personalInfo.name.toUpperCase()}
Career Interest: ${personalInfo.careerInterest}
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedIn}
===============================================================

CAREER OBJECTIVE:
${careerObjective}

EDUCATION:
Degree: Bachelor of Engineering (B.E.) in Computer Science and Engineering
College: ${personalInfo.college}
CGPA: ${personalInfo.cgpa} / 10
Expected Graduation: ${personalInfo.expectedGraduation}

TECHNICAL SKILLS:
- Programming: Java, C, Python
- Web Technologies: HTML, CSS
- Database: MySQL
- Problem Solving: Data Structures and Algorithms using Java
- Version Control: Git

FEATURED PROJECTS:
1. Student Mark Management System (Java, JSP, MySQL)
   - Developed a system to manage student examination marks.
   - Key Features: Add marks, update marks, delete marks, display marks, generate reports based on students and subjects, MySQL data management.

2. AI Career Mentor (Java, JSP, MySQL, HTML, CSS)
   - Developed a web application providing career guidance to students.
   - Key Features: Student registration, student login, career recommendation, student information storage using MySQL.

3. Ride Log (Python Mini Project)
   - Developed a Python mini project called Ride Log.
   - Key Features: Practical Python project demonstrating programming, data handling, and travel logging.

CERTIFICATIONS:
- Coursera Certifications: Completed relevant online courses and assignments.

PROBLEM SOLVING & CONTINUOUS LEARNING:
- Practicing Data Structures and Algorithms using Java.
- Solving programming problems to improve logical thinking and coding skills.
- Continuously developing algorithmic problem-solving skills.
===============================================================`;
  };

  // Generate clean standalone print-ready HTML resume
  const generateHtmlResume = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${personalInfo.name} - Resume</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #111827;
      max-width: 800px;
      margin: 0 auto;
      padding: 32px 24px;
    }
    h1 { margin: 0 0 4px 0; font-size: 26px; color: #0f172a; }
    .subtitle { color: #0284c7; font-weight: 600; margin-bottom: 8px; font-size: 15px; }
    .contacts { font-size: 13px; color: #475569; margin-bottom: 20px; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 12px; }
    .contacts span { margin-right: 14px; }
    h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #0369a1; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 18px; margin-bottom: 8px; }
    p { margin: 4px 0 8px 0; font-size: 13.5px; color: #334155; }
    ul { margin: 4px 0 8px 0; padding-left: 20px; font-size: 13px; color: #334155; }
    li { margin-bottom: 3px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 13.5px; color: #0f172a; }
    .item-sub { font-size: 12.5px; color: #64748b; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 13px; }
    .badge { background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #e0f2fe; border: 1px solid #bae6fd; padding: 12px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
    <strong>Print / Save as PDF:</strong> Press <code>Ctrl + P</code> (or <code>Cmd + P</code> on Mac) and select <strong>"Save as PDF"</strong> as your destination.
  </div>

  <h1>${personalInfo.name}</h1>
  <div class="subtitle">Career Interest: ${personalInfo.careerInterest}</div>
  <div class="contacts">
    <span>📞 ${personalInfo.phone}</span>
    <span>✉️ ${personalInfo.email}</span>
    <span>🔗 ${personalInfo.linkedIn}</span>
    <span>🎓 ${personalInfo.college}</span>
  </div>

  <h2>Career Objective</h2>
  <p>${careerObjective}</p>

  <h2>Education</h2>
  <div class="item-header">
    <span>Bachelor of Engineering (B.E.) – Computer Science and Engineering</span>
    <span>CGPA: ${personalInfo.cgpa} / 10</span>
  </div>
  <div class="item-sub">${personalInfo.college} • Expected Graduation: ${personalInfo.expectedGraduation}</div>

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <div><strong>Programming:</strong> Java, C, Python</div>
    <div><strong>Web Technologies:</strong> HTML, CSS</div>
    <div><strong>Database:</strong> MySQL</div>
    <div><strong>Problem Solving:</strong> Data Structures & Algorithms (Java)</div>
    <div><strong>Version Control:</strong> Git</div>
  </div>

  <h2>Projects</h2>
  <div style="margin-bottom: 12px;">
    <div class="item-header">
      <span>1. Student Mark Management System</span>
      <span class="badge">Java, JSP, MySQL</span>
    </div>
    <p>Developed a system to manage student examination marks. Features include: add, update, delete, display marks, and generate reports with MySQL persistence.</p>
  </div>

  <div style="margin-bottom: 12px;">
    <div class="item-header">
      <span>2. AI Career Mentor</span>
      <span class="badge">Java, JSP, MySQL, HTML, CSS</span>
    </div>
    <p>Developed a web application providing career guidance to students. Features include: student registration, login, career recommendations, and MySQL storage.</p>
  </div>

  <div style="margin-bottom: 12px;">
    <div class="item-header">
      <span>3. Ride Log</span>
      <span class="badge">Python Mini Project</span>
    </div>
    <p>Developed a Python mini project called Ride Log demonstrating programming, data handling, and travel logging fundamentals.</p>
  </div>

  <h2>Certifications</h2>
  <p><strong>Coursera Certifications:</strong> Completed relevant online courses and assignments.</p>

  <h2>Problem Solving & Continuous Learning</h2>
  <ul>
    <li>Practicing Data Structures and Algorithms using Java.</li>
    <li>Solving programming problems to improve logical thinking and coding skills.</li>
    <li>Continuously developing algorithmic problem-solving skills.</li>
  </ul>

  <script>
    window.onload = function() {
      // Auto trigger print when opened
      setTimeout(function() { window.print(); }, 500);
    };
  </script>
</body>
</html>`;
  };

  // Trigger text file download
  const handleDownloadText = () => {
    const textContent = generateTextResume();
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Laxmi_N_Patil_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloadSuccess('Downloaded .txt resume!');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  // Trigger HTML / PDF printable download & popup
  const handleDownloadHtml = () => {
    const htmlContent = generateHtmlResume();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Open in a new tab for instant printing / PDF saving
    const printWindow = window.open(url, '_blank');
    if (!printWindow) {
      // Fallback if popup blocked: download the file directly
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Laxmi_N_Patil_Resume.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    setDownloadSuccess('Opened Print-Ready Resume!');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handlePrint = () => {
    handleDownloadHtml();
  };

  return (
    <div
      id="quick-resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono font-semibold">
              Resume View
            </span>
            <span className="text-xs text-slate-400">Recruiter One-Sheet</span>
            {downloadSuccess && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 animate-fadeIn">
                <Check className="w-3 h-3" />
                {downloadSuccess}
              </span>
            )}
          </div>

          {/* Download & Print Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold shadow transition-all cursor-pointer"
              title="Open Printable Resume to Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Download Plain Text Resume (.txt)"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download (.txt)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-6 text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {personalInfo.name}
            </h1>
            <div className="text-cyan-400 font-medium text-sm mt-1">
              Career Interest: {personalInfo.careerInterest}
            </div>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-300 mt-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3 text-cyan-400" />
                {personalInfo.linkedIn}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-1.5">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-2">
              Education
            </h2>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-white text-sm">
                  Bachelor of Engineering (B.E.) – Computer Science and Engineering
                </div>
                <div className="text-xs text-slate-300">
                  {personalInfo.college}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-mono text-amber-300 font-bold">
                  CGPA: {personalInfo.cgpa}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Expected: {personalInfo.expectedGraduation}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-white">Programming:</span>{' '}
                <span className="text-slate-300">Java, C, Python</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-white">Web:</span>{' '}
                <span className="text-slate-300">HTML, CSS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-white">Database:</span>{' '}
                <span className="text-slate-300">MySQL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-white">Problem Solving:</span>{' '}
                <span className="text-slate-300">Data Structures and Algorithms using Java</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 sm:col-span-2">
                <span className="font-bold text-white">Version Control:</span>{' '}
                <span className="text-slate-300">Git</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-white text-sm">{proj.title}</div>
                    <div className="text-[11px] font-mono text-cyan-400">
                      {proj.technologies.join(', ')}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{proj.description}</p>
                  <ul className="mt-2 space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                    {proj.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-1.5">
              Certifications
            </h2>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <span className="font-bold text-white">Coursera Certifications</span> – Completed relevant online courses and assignments.
            </div>
          </div>

          {/* Problem Solving Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-1.5">
              Problem Solving & Learning
            </h2>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <li>Practicing Data Structures and Algorithms using Java.</li>
              <li>Solving programming problems to improve logical thinking and coding skills.</li>
              <li>Continuously developing algorithmic problem-solving skills.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Text (.txt)</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
