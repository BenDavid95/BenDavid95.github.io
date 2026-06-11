'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Rocket, Shield, AppWindow, Cpu } from 'lucide-react';

export default function About() {
  const interests = [
    { name: 'Machine Learning', icon: Brain, color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20' },
    { name: 'Deep Learning', icon: Cpu, color: 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20' },
    { name: 'Generative AI', icon: Rocket, color: 'text-accent-purple bg-accent-purple/10 border-accent-purple/20' },
    { name: 'Computer Vision', icon: Brain, color: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20' },
    { name: 'Cybersecurity', icon: Shield, color: 'text-accent-fuchsia bg-accent-fuchsia/10 border-accent-fuchsia/20' },
    { name: 'Full Stack Dev', icon: AppWindow, color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20' },
    { name: 'AI Products', icon: Cpu, color: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20' },
    { name: 'Entrepreneurship', icon: Rocket, color: 'text-accent-purple bg-accent-purple/10 border-accent-purple/20' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-accent-purple to-accent-blue mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Narrative & Interests */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-6 text-base leading-8 text-slate-300">
              <p>
                I am a final-year B.Tech **Artificial Intelligence & Data Science** student with hands-on experience designing, training, and building models across Machine Learning, Deep Learning, Generative AI, Computer Vision, and Cybersecurity.
              </p>
              <p>
                Through software internships and building complex projects, I have developed intelligent products ranging from AI-powered educational workflows and clinical retinal diagnosis platforms to predictive agricultural systems and security vulnerability labs.
              </p>
              <p>
                I thrive at the intersection of technical engineering and entrepreneurship. I enjoy transforming research ideas into optimized, deployable software products, and I aspire to build and scale innovative AI startups in the future.
              </p>
            </div>

            {/* Interest Badges */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Core Domains of Interest
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest, idx) => {
                  const IconComp = interest.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-medium ${interest.color} transition-all duration-200 hover:scale-[1.03]`}
                    >
                      <IconComp className="h-3.5 w-3.5" />
                      {interest.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Education
            </h3>
            
            <div className="relative border-l border-white/10 pl-6 space-y-12">
              {/* Karunya University */}
              <div className="relative">
                {/* Glowing Node */}
                <div className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-bg-deep border border-accent-purple">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-purple animate-ping" />
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-accent-purple">
                      2022 – PRESENT
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-accent-purple/10 px-2 py-0.5 text-xxs font-bold text-accent-purple border border-accent-purple/20">
                      CGPA: 8.4
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    B.Tech Artificial Intelligence & Data Science
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Karunya Institute of Technology and Sciences
                  </p>
                  <p className="text-xs text-slate-500 mt-3">
                    Focus on Deep Learning, NLP, Data Structures, Algorithms, Neural Nets, and Generative models.
                  </p>
                </div>
              </div>

              {/* Velammal Bodhi */}
              <div className="relative">
                {/* Node */}
                <div className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-bg-deep border border-white/10">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      2020 – 2022
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-xxs font-bold text-slate-300 border border-white/10">
                      Score: 83%
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    Higher Secondary Education
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Velammal Bodhi Campus
                  </p>
                  <p className="text-xs text-slate-500 mt-3">
                    Majored in Physics, Chemistry, Mathematics, and Computer Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
