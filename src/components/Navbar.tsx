'use client';

import React from 'react';
import { Terminal, Sparkles, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  recruiterMode: boolean;
  setRecruiterMode: (val: boolean) => void;
}

export default function Navbar({ recruiterMode, setRecruiterMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-deep/80 backdrop-blur-md no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white hover:opacity-90">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-tr from-accent-purple to-accent-blue font-mono text-sm font-semibold">
                B
              </span>
              <span>
                Bendavid<span className="text-accent-purple font-mono">.ai</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Recruiter Mode Toggle */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                recruiterMode
                  ? 'bg-accent-purple/20 text-accent-purple border border-accent-purple/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {recruiterMode ? (
                <>
                  <Terminal className="h-3.5 w-3.5 animate-pulse" />
                  RECRUITER MODE: ACTIVE
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
                  RECRUITER MODE
                </>
              )}
            </button>
          </div>

          {/* Mobile menu and toggle button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Recruiter Mode Toggle for Mobile */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`flex items-center justify-center rounded-full p-2 transition-all ${
                recruiterMode
                  ? 'bg-accent-purple/20 text-accent-purple border border-accent-purple/40'
                  : 'bg-white/5 text-slate-300 border border-white/10'
              }`}
              title="Toggle Recruiter Mode"
            >
              <FileText className="h-4 w-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/5 bg-bg-deep/95 backdrop-blur-lg md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-3">
              <button
                onClick={() => {
                  setRecruiterMode(!recruiterMode);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  recruiterMode
                    ? 'bg-accent-purple/20 text-accent-purple border border-accent-purple/50'
                    : 'bg-white/5 text-slate-300 border border-white/10'
                }`}
              >
                {recruiterMode ? 'Recruiter Mode: Active' : 'Activate Recruiter Mode'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
