'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
  onDownloadResume: () => void;
}

export default function Hero({ onViewProjects, onContact, onDownloadResume }: HeroProps) {
  const rotatorTexts = [
    'Machine Learning Engineer',
    'Generative AI Developer',
    'Computer Vision Enthusiast',
    'Future Tech Founder',
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatorTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Internships Worked', value: '3', icon: Briefcase, color: 'text-accent-blue' },
    { label: 'Technical Projects', value: '8+', icon: Code, color: 'text-accent-cyan' },
    { label: 'Professional Certs', value: '14+', icon: Award, color: 'text-accent-purple' },
    { label: 'Engineering CGPA', value: '8.4', icon: GraduationCap, color: 'text-accent-fuchsia' },
  ];

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center py-20 md:py-32 overflow-hidden no-print">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-accent-purple/15 to-accent-blue/15 blur-[120px]" />
      <div className="absolute top-[10%] left-[20%] -z-10 h-[200px] w-[200px] rounded-full bg-accent-cyan/10 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Top welcome label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-center sm:self-start flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-slate-300 font-mono tracking-wider"
          >
            <Terminal className="h-3.5 w-3.5 text-accent-purple animate-pulse" />
            SYSTEM INITIALIZED • FINAL YEAR B.TECH AI & DS
          </motion.div>

          {/* Heading Name */}
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Bendavid D Walker C
            </motion.h1>

            {/* Rotator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 h-12 text-xl font-semibold text-slate-400 sm:text-2xl md:text-3xl"
            >
              <span>Specializing as a</span>
              <div className="relative inline-block w-full sm:w-auto text-center sm:text-left font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 right-0 sm:static block"
                  >
                    {rotatorTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subtitle & Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 mx-auto sm:mx-0 max-w-2xl text-base text-slate-400 sm:text-lg md:text-xl leading-relaxed"
            >
              Building AI Systems That Solve Real-World Problems. A final-year Artificial Intelligence & Data Science Engineer passionate about deploying intelligent systems, deep neural architectures, and robust full-stack logic.
            </motion.p>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4"
          >
            <button
              onClick={onViewProjects}
              className="group flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent-purple to-accent-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-purple/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-accent-purple/40"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDownloadResume}
              className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            >
              Download Resume
            </button>

            <button
              onClick={onContact}
              className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/5 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:text-white hover:bg-white/5"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                      {stat.value}
                    </span>
                    <IconComp className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <span className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
