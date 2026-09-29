import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterSnapshot } from './components/RecruiterSnapshot';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProblemSolving } from './components/ProblemSolving';
import { Certifications } from './components/Certifications';
import { CareerInterest } from './components/CareerInterest';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickResumeModal } from './components/QuickResumeModal';
import { FileText, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Section Observer for navbar highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 120;
        const sectionId = current.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* 1. Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenQuickResume={() => setIsResumeModalOpen(true)} />

        {/* 3. Recruiter Snapshot (Fast 15-second scan for hiring managers) */}
        <RecruiterSnapshot />

        {/* 4. About Me */}
        <About />

        {/* 5. Education */}
        <Education />

        {/* 6. Technical Skills */}
        <Skills />

        {/* 7. Featured Projects */}
        <Projects />

        {/* 8. Problem Solving & Continuous Learning */}
        <ProblemSolving />

        {/* 9. Certifications */}
        <Certifications />

        {/* 10. Career Interest */}
        <CareerInterest />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Quick Resume Button */}
      <button
        id="floating-resume-btn"
        type="button"
        onClick={() => setIsResumeModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-mono font-semibold shadow-xl shadow-black/60 border border-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
        title="View 1-Page Summary Resume"
      >
        <FileText className="w-4 h-4 text-cyan-200" />
        <span className="hidden sm:inline">Resume Overview</span>
        <span className="sm:hidden">Resume</span>
      </button>

      {/* Quick Resume One-Sheet Modal */}
      <QuickResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
