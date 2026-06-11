import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-bg-deep/30 py-12 text-slate-400 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="font-display font-bold text-white">
              Bendavid D Walker C
            </div>
            <div className="text-xs text-slate-500">
              Artificial Intelligence & Data Science Engineer
            </div>
          </div>

          {/* Location details */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-accent-purple" />
            Madurai, Tamil Nadu, India
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/BenDavid95"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-200"
              title="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:bendavid9510@gmail.com"
              className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-200"
              title="Email Contact"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/bendavid-d-walker-c-228996249"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-200"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
          <p>© {currentYear} Bendavid D Walker C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
