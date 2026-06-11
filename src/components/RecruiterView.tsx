'use client';

import React from 'react';
import { Mail, MapPin, Printer, ArrowLeft, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface RecruiterViewProps {
  onBack: () => void;
}

export default function RecruiterView({ onBack }: RecruiterViewProps) {
  const handlePrint = () => {
    window.print();
  };

  const certifications = [
    'Cisco: AI Fundamentals with IBM, JavaScript Essentials 1, JavaScript Essentials 2, Data Analytics Essentials',
    'Infosys: Deep Learning with TensorFlow, Machine Learning using Python, Tableau and Data Analytics, Agile and GitHub',
    'Coursera: RPA Basics with UiPath',
    'NPTEL: Human Computer Interaction, Cybersecurity and Privacy, English for Competitive Exams'
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 print:py-0">
      
      {/* Top Bar (Actions) - Hidden in Print */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 no-print">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Standard View
          </button>
          
          <div className="flex items-center gap-1.5 rounded-full bg-accent-purple/15 border border-accent-purple/30 px-3 py-1 text-xxs font-mono font-semibold text-accent-purple">
            <Terminal className="h-3 w-3" />
            RECRUITER MODE ACTIVE
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-xl bg-linear-to-r from-accent-purple to-accent-indigo px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-accent-purple/20 hover:scale-[1.02] transition-all cursor-pointer"
        >
          <Printer className="h-4 w-4" />
          Print / Save PDF
        </button>
      </div>

      {/* Main Print Container */}
      <div className="print-page bg-bg-obsidian border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl print:border-none print:bg-white print:p-0 print:shadow-none transition-all duration-300">
        
        {/* Header Block */}
        <header className="border-b border-slate-800 print:border-slate-300 pb-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-slate-900 font-display">
                Bendavid D Walker C
              </h1>
              <p className="text-sm font-semibold text-accent-cyan print:text-slate-700 mt-1 uppercase tracking-wide">
                Artificial Intelligence & Data Science Engineer
              </p>
            </div>
            
            {/* Contact Grid */}
            <div className="text-xs space-y-1.5 text-slate-400 print:text-slate-600 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <a href="mailto:bendavid9510@gmail.com" className="hover:underline">bendavid9510@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <a href="https://github.com/BenDavid95" className="hover:underline">github.com/BenDavid95</a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <a href="https://linkedin.com/in/bendavid-walker" className="hover:underline">linkedin.com/in/bendavid-walker</a>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Summary */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Professional Profile
          </h2>
          <p className="text-sm text-slate-300 print:text-slate-700 leading-relaxed">
            Final-year Artificial Intelligence & Data Science student with hands-on experience developing ML models, generative AI architectures, computer vision pipelines, and secure backend solutions. Proven record through competitive software internships and building production-ready projects targeting complex domains (healthcare, agriculture, cybersecurity, translation).
          </p>
        </section>

        {/* Education Block */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Education
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white print:text-slate-900 text-sm">B.Tech in Artificial Intelligence & Data Science</h3>
                <p className="text-xs text-slate-400 print:text-slate-600">Karunya Institute of Technology and Sciences</p>
              </div>
              <div className="text-right text-xs font-mono">
                <span className="block font-bold text-white print:text-slate-900">CGPA: 8.4</span>
                <span className="text-slate-500 print:text-slate-600">2022 - Present</span>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white print:text-slate-900 text-sm">Higher Secondary Education</h3>
                <p className="text-xs text-slate-400 print:text-slate-600">Velammal Bodhi Campus</p>
              </div>
              <div className="text-right text-xs font-mono">
                <span className="block font-bold text-white print:text-slate-900">Score: 83%</span>
                <span className="text-slate-500 print:text-slate-600">2020 - 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Technical Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <h3 className="font-bold text-white print:text-slate-900 mb-1">Core AI & ML</h3>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Deep Learning, Computer Vision, Generative AI & LLMs, Prompt Engineering, OpenCV, MediaPipe, TensorFlow, Keras, Scikit-Learn
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white print:text-slate-900 mb-1">Languages & DBs</h3>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Python, Java, C, SQL (MySQL, SQLite), JavaScript / TypeScript, PHP
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white print:text-slate-900 mb-1">Tools & Frameworks</h3>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Git/GitHub, VS Code, Jupyter, Wireshark, VirtualBox, Linux, OOP, REST APIs, Agile
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8 page-break-before-auto">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {/* BNTS */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-white print:text-slate-900 text-sm">AI Backend Intern</h3>
                  <span className="text-xs font-semibold text-accent-cyan print:text-slate-700">BNTS</span>
                </div>
                <span className="text-xs font-mono text-slate-500 print:text-slate-600">Oct 2024 - Mar 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-2">
                <li>Built multilingual AI content translation pipelines supporting 10 languages using large language models.</li>
                <li>Developed automated notes generation systems utilizing LLM routing and prompt constraints.</li>
                <li>Created AI-powered quiz generation modules featuring strict schema outputs for SQL databases.</li>
                <li>Integrated AI APIs and translation services into core backend workflows, optimizing token costs by 35%.</li>
              </ul>
            </div>

            {/* Intel */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-white print:text-slate-900 text-sm">Machine Learning Intern</h3>
                  <span className="text-xs font-semibold text-accent-cyan print:text-slate-700">Intel Corporation</span>
                </div>
                <span className="text-xs font-mono text-slate-500 print:text-slate-600">May 2024 - Jul 2024</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-2">
                <li>Developed machine learning models for autonomous vehicle cut-in detection.</li>
                <li>Performed raw data preprocessing, spatial image augmentation, and validation metrics evaluation.</li>
                <li>Trained CNNs and Random Forest models, improving recall on critical vehicle actions by 8%.</li>
                <li>Collaborated in Agile sprints, presenting check-point models to cross-functional teams.</li>
              </ul>
            </div>

            {/* EverAppTech */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-white print:text-slate-900 text-sm">Programming Intern</h3>
                  <span className="text-xs font-semibold text-accent-cyan print:text-slate-700">EverAppTech Solutions</span>
                </div>
                <span className="text-xs font-mono text-slate-500 print:text-slate-600">May 2024 - Jun 2024</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-2">
                <li>Strengthened software engineering fundamentals under senior developer mentorship.</li>
                <li>Built structured backend logical scripts using C and Python.</li>
                <li>Designed normalized SQL databases, writing optimized queries and sorting algorithms.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pinned Projects */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Featured Technical Projects
          </h2>
          
          <div className="space-y-4 text-xs">
            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                VisionGuard AI: Retinal Disease Detection with Grad-CAM Explainability
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> TensorFlow, Keras, Grad-CAM, OpenCV, Python
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Engineered a custom deep transfer learning architecture using a ResNet50 backbone to classify 4 distinct retinal diseases from OCT scans. Integrated Grad-CAM to compute attention heatmaps, solving the clinical interpretability challenge. Achieved a validation accuracy of 94.2% and less than 220ms inference latency.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                AgriSense AI: Intelligent Crop & Fertilizer Recommendation Platform
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> Python, Scikit-Learn, HTML, CSS, Pandas
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Designed a decision support engine utilizing Random Forest and Gradient Boosted models to recommend crops and soil strategy based on N-P-K soil metrics. Reduced required input dimensions by 30% while maintaining 95.8% prediction accuracy.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                ResumeAI Pro: Generative AI ATS Career Assistant
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> Flask, OpenAI API, JSON Schema, HTML/CSS, Python
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Built an ATS optimization assistant using GPT models. Configured strict JSON schema validators to prevent output hallucinations. Implemented token caching strategies, reducing operational costs by 40%.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                Heartbleed Vulnerability Research Lab
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> Python, Wireshark, VirtualBox, Linux, OpenSSL
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Simulated CVE-2014-0160 (Heartbleed) in host-only virtual environments. Analyzed raw packet-level TLS handshakes using Wireshark, capturing and mapping data leakage anomalies.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-2">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
