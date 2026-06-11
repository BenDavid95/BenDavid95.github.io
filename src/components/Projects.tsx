'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, X, AlertCircle, Cpu, Shield, Globe, Award } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  category: 'genai' | 'deeplearning' | 'security' | 'web';
  categoryLabel: string;
  tech: string[];
  description: string;
  challenge: string;
  architecture: string;
  impact: string;
  github?: string;
  details: {
    dataset?: string;
    modelDetails?: string;
    hyperparameters?: string;
    metrics?: string;
  };
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'genai' | 'deeplearning' | 'security' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'VisionGuard AI',
      subtitle: 'Explainable Eye Disease Detection System',
      category: 'deeplearning',
      categoryLabel: 'Deep Learning & Medical Vision',
      tech: ['TensorFlow', 'Keras', 'Grad-CAM', 'OpenCV', 'Python'],
      description: 'A deep-learning healthcare platform designed to classify retinal diseases from Optical Coherence Tomography (OCT) scans while providing clinical interpretability.',
      challenge: 'Medical AI often operates as a "black box," preventing doctors from understanding model justifications. We needed to classify 4 retinal conditions while highlighting exactly what the model saw.',
      architecture: 'Developed a deep convolutional transfer learning architecture using a fine-tuned ResNet50 backbone. Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) to compute and overlay spatial attention heatmaps onto the input scans.',
      impact: 'Achieved a validation accuracy of 94.2% on OCT datasets. Successfully generated localized heatmap overlays that align with real clinical symptoms, boosting practitioner confidence in diagnostic suggestions.',
      github: 'https://github.com/BenDavid95/VisionGuard-AI',
      details: {
        dataset: 'Kaggle Retinal OCT Dataset (84,000+ images: CNV, DME, Drusen, Normal)',
        modelDetails: 'ResNet50 feature extractor + Custom Dense classification head with dropout regularization',
        hyperparameters: 'Adam Optimizer (learning rate: 1e-4), Categorical Crossentropy, Batch size: 32',
        metrics: '94.2% Validation Accuracy, 0.94 F1-Score, <220ms inference latency per scan'
      }
    },
    {
      title: 'AgriSense AI',
      subtitle: 'Intelligent Crop & Fertilizer Recommendation Platform',
      category: 'deeplearning',
      categoryLabel: 'Machine Learning & Agriculture',
      tech: ['Python', 'Scikit-Learn', 'HTML', 'CSS', 'Pandas'],
      description: 'An AI-powered agricultural decision support system that recommends crops, fertilizers, and farming strategies based on soil parameters and environmental metrics.',
      challenge: 'High-dimensional soil telemetry (Nitrogen, Phosphorus, Potassium, temperature, humidity, pH, rainfall) requires multi-label outputs with low-latency execution for rural connectivity.',
      architecture: 'Created an ensemble predictive pipeline combining Random Forest and Gradient Boosted Decision Trees. Performed feature importance analysis to prune redundant environmental features, and exported the serialized models for micro-web server environments.',
      impact: 'Achieved a crop prediction accuracy of 95.8%. Reduced input parameters needed by 30% without loss of precision, allowing rapid execution even on low-bandwidth rural networks.',
      github: 'https://github.com/BenDavid95/Agri-Intelligence',
      details: {
        dataset: 'Curated soil nutrient telemetry database (2,200 records of Indian farm soils)',
        modelDetails: 'Optimized Random Forest Classifier + XGBoost Multi-Class Predictor',
        hyperparameters: 'n_estimators: 150, max_depth: 12, min_samples_split: 5',
        metrics: '95.8% Prediction Accuracy, 96.1% Recall on crop selection recommendations'
      }
    },
    {
      title: 'ResumeAI Pro',
      subtitle: 'Generative AI Career Assistant',
      category: 'genai',
      categoryLabel: 'Generative AI & NLP',
      tech: ['Flask', 'OpenAI API', 'JSON Schema', 'HTML5', 'CSS3', 'Python'],
      description: 'An AI-powered ATS optimizer and career assistant that parses resumes, analyzes job descriptions, and generates optimized bullet points.',
      challenge: 'LLMs can experience hallucinations when formatting resumes. We required deterministic, structured outputs that exactly match recruiter ATS scanner standards while keeping token costs low.',
      architecture: 'Designed a Flask-based backend implementing OpenAI’s Structured Outputs API using strict JSON schemas. Implemented prompt-chaining workflows to isolate parsing, job alignment, and bullet-point rewriting.',
      impact: 'Eliminated formatting failures. Implemented token-caching strategies that reduced API consumption costs by 40% while delivering resumes within 12 seconds.',
      github: 'https://github.com/BenDavid95/ResumeAI-Pro',
      details: {
        dataset: 'Standardized resume structures and job description parameters',
        modelDetails: 'GPT-4o / GPT-3.5-Turbo API with strict JSON schema parsing guides',
        hyperparameters: 'Temperature: 0.1 (low randomness for factual resume writing)',
        metrics: '100% Schema validation compliance, average response generation under 8 seconds'
      }
    },
    {
      title: 'Heartbleed Vulnerability Research Lab',
      subtitle: 'Cybersecurity TLS Network Analysis Lab',
      category: 'security',
      categoryLabel: 'Systems & Cybersecurity',
      tech: ['Python', 'Wireshark', 'VirtualBox', 'Linux', 'OpenSSL'],
      description: 'An educational network research laboratory replicating the Heartbleed vulnerability (CVE-2014-0160) inside a sandboxed environment to analyze packet-level exploits.',
      challenge: 'Safely demonstrating memory leakage without creating actual network risks, while capturing and explaining TLS heartbeat payload structure in real-time.',
      architecture: 'Constructed an isolated virtual network utilizing VirtualBox and Host-Only adapters. Deployed an unpatched OpenSSL server version, built custom Python attack scripts, and piped network traffic directly to Wireshark for analysis.',
      impact: 'Mapped exact memory leakage patterns (up to 64KB per heartbeat). Created educational disassembler scripts that parse and color-code the vulnerable TLS heartbeat payload headers for training.',
      github: 'https://github.com/BenDavid95/Heartbleed-Research-Lab',
      details: {
        dataset: 'Raw packet captures (.pcap) of vulnerable vs patched TLS handshakes',
        modelDetails: 'Rule-based packet analyzer written in Python with Scapy network library',
        hyperparameters: 'None (Systems & Network Analysis project)',
        metrics: '100% exploit reproduction in isolated lab, 0 bytes of external network exposure'
      }
    },
    {
      title: 'AirCanvas AI',
      subtitle: 'Gesture-Controlled Virtual Whiteboard',
      category: 'deeplearning',
      categoryLabel: 'Computer Vision & CV',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      description: 'A touchless digital drawing board utilizing computer vision and hand-landmark tracking to write, draw, and interact on an air canvas.',
      challenge: 'Raw hand tracking coordinates from webcams suffer from high noise and cursor jitter, making drawing illegible.',
      architecture: 'Utilized MediaPipe Hand Landmarks to track index finger tips in 2D space. Engineered a custom spatial noise-reduction filter (exponential moving average) to smooth drawing coordinates in real-time.',
      impact: 'Reduced coordinate cursor jitter by 92%. Maintained processing speeds at 30 FPS with tracking latency kept below 12ms on low-end hardware.',
      github: 'https://github.com/BenDavid95/VirtualBoard',
      details: {
        dataset: 'Live webcam video input (640x480 resolution at 30fps)',
        modelDetails: 'MediaPipe BlazeHand Landmark Tracking model (trained on 30k+ hands)',
        hyperparameters: 'Min detection confidence: 0.75, Min tracking confidence: 0.65',
        metrics: '<12ms coordinate tracking latency, 92% jitter reduction via custom moving filters'
      }
    },
    {
      title: 'NotesHub',
      subtitle: 'Collaborative Academic Resource Platform',
      category: 'web',
      categoryLabel: 'Web Systems',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      description: 'A scalable, collaborative library and notes sharing platform designed for academic organizations and student communities.',
      challenge: 'Handling highly concurrent search queries and database connections under restricted hosting server constraints.',
      architecture: 'Built a modular MVC application using PHP. Normalized database tables in MySQL, implemented compound indexing on search columns, and structured custom caching layers for popular resource lists.',
      impact: 'Reduced search query round-trip latency by 60% and successfully simulated concurrent handling of 500+ active users without database timeouts.',
      github: 'https://github.com/BenDavid95/NotesHub',
      details: {
        dataset: 'Relational database schema managing student users, courses, subjects, and uploads',
        modelDetails: 'Full-stack relational systems architecture (MVC pattern)',
        hyperparameters: 'Database pooling size: 50 connections, Query indexing keys',
        metrics: '60% query speedup, supports 500+ simulated parallel active queries'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects', icon: FolderGit2 },
    { id: 'genai', label: 'Generative AI', icon: Globe },
    { id: 'deeplearning', label: 'Deep Learning & ML', icon: Cpu },
    { id: 'security', label: 'Systems & Security', icon: Shield },
    { id: 'web', label: 'Web Systems', icon: Award }
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-accent-purple to-accent-blue mx-auto md:mx-0" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-12">
          {filters.map((f) => {
            const IconComp = f.icon;
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent-indigo/15 text-white border-accent-indigo/40 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10'
                }`}
              >
                <IconComp className="h-4 w-4" />
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Top card content */}
              <div className="p-6 sm:p-8">
                <span className="text-xxs font-mono font-bold tracking-wider text-accent-cyan uppercase bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-2.5 py-0.5">
                  {project.categoryLabel}
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold text-white tracking-tight group-hover:text-accent-purple transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 font-semibold leading-relaxed">
                  {project.subtitle}
                </p>
                <p className="mt-4 text-sm text-slate-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom tag bar */}
              <div className="border-t border-white/5 bg-white/[0.01] px-6 py-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-xxs font-mono text-slate-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-xxs font-mono text-slate-500">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Deep-Dive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-bg-obsidian p-6 sm:p-8 md:p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-white/10 pb-6 mb-8">
                <span className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400 font-semibold">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Modal Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                {/* Left side details */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Project Overview
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                      The Technical Challenge
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                      System Architecture
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>
                </div>

                {/* Right side stats / specs */}
                <div className="md:col-span-5 space-y-6">
                  {/* Performance stats panel */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                      Engineering Metrics
                    </h4>
                    
                    <div className="space-y-3.5">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase">Impact Result</span>
                        <span className="text-sm font-semibold text-accent-cyan">{selectedProject.impact}</span>
                      </div>
                      
                      {selectedProject.details.dataset && (
                        <div className="flex flex-col gap-0.5 border-t border-white/5 pt-2">
                          <span className="text-[10px] font-mono text-slate-500 uppercase">Dataset Used</span>
                          <span className="text-xs text-slate-300 leading-relaxed">{selectedProject.details.dataset}</span>
                        </div>
                      )}

                      {selectedProject.details.modelDetails && (
                        <div className="flex flex-col gap-0.5 border-t border-white/5 pt-2">
                          <span className="text-[10px] font-mono text-slate-500 uppercase">Model Structure</span>
                          <span className="text-xs text-slate-300 leading-relaxed">{selectedProject.details.modelDetails}</span>
                        </div>
                      )}

                      {selectedProject.details.metrics && (
                        <div className="flex flex-col gap-0.5 border-t border-white/5 pt-2">
                          <span className="text-[10px] font-mono text-slate-500 uppercase">Validation Specs</span>
                          <span className="text-xs text-slate-300 font-mono leading-relaxed">{selectedProject.details.metrics}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Repo */}
                  <div className="flex flex-col gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all py-3.5 text-xs font-semibold text-white text-center"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Explore GitHub Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies List */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Technologies & Frameworks Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-accent-purple/10 border border-accent-purple/20 px-3 py-1 text-xs font-mono text-accent-purple"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
