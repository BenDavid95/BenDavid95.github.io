'use client';

import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: 'BNTS',
      role: 'AI Backend Intern',
      duration: 'Oct 2024 – Mar 2025',
      highlights: [
        'Architected multilingual AI content translation pipelines supporting 10 languages.',
        'Engineered automated notes generation systems using Large Language Models.',
        'Built AI-powered quiz generation workflows.'
      ],
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Python', 'Flask/FastAPI']
    },
    {
      company: 'Intel',
      role: 'Machine Learning Intern',
      duration: 'May 2024 – Jul 2024',
      highlights: [
        'Developed ML models for autonomous vehicle cut-in detection.',
        'Performed feature engineering and data preprocessing.',
        'Conducted model training and performance evaluation.'
      ],
      skills: ['Machine Learning', 'Feature Engineering', 'Data Preprocessing', 'Model Training', 'Model Evaluation']
    },
    {
      company: 'EverAppTech Solutions',
      role: 'Programming Intern',
      duration: 'May 2024 – Jun 2024',
      highlights: [
        'Built backend business logic using Python and C.',
        'Applied modular software engineering practices.'
      ],
      skills: ['Python', 'C Programming', 'Modular Design', 'Backend Logic', 'Software Engineering']
    }
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Work Experience
          </h2>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-accent-purple to-accent-blue mx-auto md:mx-0" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-900 pl-6 md:pl-10 space-y-16 max-w-4xl">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[32px] md:-left-[48px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-bg-deep border-2 border-slate-800 group-hover:border-accent-purple transition-colors duration-300">
                <Briefcase className="h-3.5 w-3.5 text-slate-500 group-hover:text-accent-purple transition-colors duration-300" />
              </div>

              {/* Card wrapper */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-accent-cyan">
                      {exp.company}
                    </span>
                  </div>
                  
                  <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 self-start sm:self-center">
                    <Calendar className="h-3.5 w-3.5 text-accent-purple" />
                    {exp.duration}
                  </span>
                </div>

                {/* Highlights bullet points */}
                <ul className="space-y-3.5 text-sm text-slate-300 leading-relaxed mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-accent-indigo shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-lg bg-white/[0.03] border border-white/5 px-2.5 py-1 text-xxs font-semibold uppercase tracking-wider text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
