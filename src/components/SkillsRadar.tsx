'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Sliders, CheckCircle2 } from 'lucide-react';

export default function SkillsRadar() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'languages' | 'tools'>('all');

  const skillsData = [
    // Core AI & ML
    { name: 'Machine Learning', category: 'ai', level: 90 },
    { name: 'Deep Learning', category: 'ai', level: 88 },
    { name: 'Generative AI', category: 'ai', level: 88 },
    { name: 'Large Language Models (LLMs)', category: 'ai', level: 86 },
    { name: 'Computer Vision', category: 'ai', level: 85 },
    { name: 'Transfer Learning', category: 'ai', level: 86 },
    { name: 'Explainable AI (Grad-CAM)', category: 'ai', level: 90 },
    { name: 'Prompt Engineering', category: 'ai', level: 92 },
    { name: 'Feature Engineering', category: 'ai', level: 88 },
    { name: 'Model Training', category: 'ai', level: 90 },
    { name: 'Model Evaluation', category: 'ai', level: 88 },
    { name: 'TensorFlow / Keras', category: 'ai', level: 84 },
    { name: 'Scikit-Learn', category: 'ai', level: 88 },
    { name: 'OpenCV / MediaPipe', category: 'ai', level: 86 },

    // Languages & Databases
    { name: 'Python', category: 'languages', level: 95 },
    { name: 'Java', category: 'languages', level: 80 },
    { name: 'C', category: 'languages', level: 75 },
    { name: 'SQL', category: 'languages', level: 85 },
    { name: 'JavaScript / TypeScript', category: 'languages', level: 82 },
    { name: 'PHP', category: 'languages', level: 70 },
    { name: 'HTML/CSS', category: 'languages', level: 88 },
    { name: 'MySQL / SQLite', category: 'languages', level: 85 },

    // Tools & Concepts
    { name: 'Git & GitHub', category: 'tools', level: 90 },
    { name: 'VS Code', category: 'tools', level: 92 },
    { name: 'Jupyter Notebook', category: 'tools', level: 90 },
    { name: 'Wireshark', category: 'tools', level: 80 },
    { name: 'VirtualBox', category: 'tools', level: 85 },
    { name: 'Object Oriented Programming', category: 'tools', level: 90 },
    { name: 'Data Structures', category: 'tools', level: 86 },
    { name: 'Algorithms', category: 'tools', level: 88 },
    { name: 'REST APIs', category: 'tools', level: 88 },
    { name: 'Agile Development', category: 'tools', level: 82 },
    { name: 'Cybersecurity Research', category: 'tools', level: 85 },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  const categories = [
    { id: 'all', name: 'All Competencies', icon: Sliders },
    { id: 'ai', name: 'Core AI & ML', icon: Cpu },
    { id: 'languages', name: 'Languages & DBs', icon: Code },
    { id: 'tools', name: 'Tools & Concepts', icon: Database },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden no-print bg-bg-dark/30 border-y border-white/5">
      <div className="absolute inset-0 bg-radial-at-c from-accent-purple/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </h2>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-accent-purple to-accent-blue mx-auto md:mx-0" />
        </div>

        {/* Custom tabs selector */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent-purple/10 text-white border-accent-purple/40 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10'
                }`}
              >
                <IconComp className="h-4 w-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              className="glass-panel relative overflow-hidden rounded-2xl p-5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-sm text-white">{skill.name}</span>
                <CheckCircle2 className="h-4 w-4 text-accent-cyan" />
              </div>
              
              {/* Level progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xxs font-mono text-slate-500">
                  <span>PROFICIENCY</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-900 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
