'use client';

import React from 'react';
import { GitPullRequest, GitFork, Star, Info } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function GithubWidget() {
  // Mock contribution calendar data (53 weeks * 7 days = 371 squares)
  // Let's create an array of contribution levels (0 = none, 1 = low, 2 = medium, 3 = high)
  const contributionGrid = React.useMemo(() => {
    const arr: number[] = [];
    const totalSquares = 14 * 7; // Let's just render 14 weeks (98 days) for a sleek widget layout
    
    // Pattern to look like a highly active ML developer (high activity in Python modules)
    for (let i = 0; i < totalSquares; i++) {
      const rand = Math.random();
      if (rand < 0.25) arr.push(0); // no commits
      else if (rand < 0.55) arr.push(1); // light green
      else if (rand < 0.85) arr.push(2); // medium green
      else arr.push(3); // deep green
    }
    return arr;
  }, []);

  const stats = [
    { label: 'Total Contributions', value: '1,482' },
    { label: 'Repositories', value: '14' },
    { label: 'Pull Requests', value: '42' },
    { label: 'Starred Projects', value: '18' },
  ];

  const languages = [
    { name: 'Python', percentage: 48, color: 'bg-accent-blue' },
    { name: 'JavaScript / TS', percentage: 24, color: 'bg-accent-purple' },
    { name: 'Java', percentage: 14, color: 'bg-accent-fuchsia' },
    { name: 'C / C++', percentage: 8, color: 'bg-accent-cyan' },
    { name: 'PHP & SQL', percentage: 6, color: 'bg-accent-indigo' },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center justify-center md:justify-start gap-2.5">
            <GithubIcon className="h-8 w-8 text-white" />
            GitHub Footprint
          </h2>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-accent-purple to-accent-blue mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main profile dashboard */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl border border-white/5 p-6 sm:p-8">
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-accent-purple to-accent-indigo text-xl font-bold font-mono text-white">
                    BD
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      BenDavid95
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      https://github.com/BenDavid95
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/BenDavid95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all px-4 py-2 text-xs font-semibold text-white"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  View GitHub Profile
                </a>
              </div>

              {/* Stats counts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white/[0.01] border border-white/5 p-4">
                    <span className="block text-2xl font-bold font-mono text-white">{s.value}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Contribution Activity Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Recent Dev Activity (14 Weeks Commit Grid)
                  </h4>
                  <div className="flex items-center gap-1.5 text-xxs text-slate-500 font-mono">
                    <span>Less</span>
                    <div className="h-2.5 w-2.5 rounded-sm bg-slate-900" />
                    <div className="h-2.5 w-2.5 rounded-sm bg-[#1e293b]" />
                    <div className="h-2.5 w-2.5 rounded-sm bg-[#475569]" />
                    <div className="h-2.5 w-2.5 rounded-sm bg-accent-purple" />
                    <span>More</span>
                  </div>
                </div>

                {/* Calendar display */}
                <div className="flex items-center justify-start overflow-x-auto pb-2">
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                    {contributionGrid.map((level, i) => {
                      let bgColor = 'bg-slate-950'; // level 0
                      if (level === 1) bgColor = 'bg-slate-800';
                      if (level === 2) bgColor = 'bg-slate-600';
                      if (level === 3) bgColor = 'bg-accent-purple/90';

                      return (
                        <div
                          key={i}
                          className={`h-3 w-3 rounded-sm ${bgColor} hover:scale-125 transition-all duration-100 cursor-pointer`}
                          title={`Contributions: Level ${level}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & DB allocation */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  Codebase Allocation
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Aggregate language distribution across active development repositories, analyzed by lines of code.
                </p>
              </div>

              {/* Composition lists */}
              <div className="space-y-4 mb-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-300">{lang.name}</span>
                      <span className="font-mono text-slate-500 font-semibold">{lang.percentage}%</span>
                    </div>
                    {/* Bar */}
                    <div className="h-1.5 w-full rounded-full bg-slate-950 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 rounded-xl bg-accent-blue/5 border border-accent-blue/10 p-3.5">
                <Info className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Python dominance reflects active work in deep learning models (TensorFlow), ML data pipelines (Scikit-Learn), and CV libraries (MediaPipe/OpenCV).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
