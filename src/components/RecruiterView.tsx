'use client';

import React from 'react';
import { Mail, MapPin, Printer, ArrowLeft, Terminal, Phone, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface RecruiterViewProps {
  onBack: () => void;
}

export default function RecruiterView({ onBack }: RecruiterViewProps) {
  const handlePrint = () => {
    window.print();
  };

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

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Bendavid_Walker_Resume.pdf"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-all"
            title="Download LaTeX PDF Resume"
          >
            <FileDown className="h-4 w-4" />
            Download PDF
          </a>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-accent-purple to-accent-indigo px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-accent-purple/20 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            Print Resume
          </button>
        </div>
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
                <Phone className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <a href="https://wa.me/916382372387" target="_blank" rel="noopener noreferrer" className="hover:underline">+91 6382372387</a>
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
                <a href="https://linkedin.com/in/bendavid-d-walker-c-228996249" className="hover:underline">linkedin.com/in/bendavid-d-walker-c-228996249</a>
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
            Results-driven Artificial Intelligence & Data Science Engineer with hands-on experience developing ML systems, LLM-powered applications, and Computer Vision solutions. Proven track record in building scalable AI backend pipelines, explainable deep learning models, and secure software architectures. Adept at leveraging state-of-the-art Generative AI and intelligent automation to solve complex product and research challenges in Agile environments.
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
                <span className="block font-bold text-white print:text-slate-900">CGPA: 8.38 / 10.0</span>
                <span className="text-slate-500 print:text-slate-600">2022 - 2026</span>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white print:text-slate-900 text-sm">Higher Secondary Education</h3>
                <p className="text-xs text-slate-400 print:text-slate-600">Velammal Bodhi Campus</p>
              </div>
              <div className="text-right text-xs font-mono">
                <span className="block font-bold text-white print:text-slate-900">Score: 83.0%</span>
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
                Machine Learning, Deep Learning, Generative AI, Large Language Models (LLMs), Computer Vision, Transfer Learning, Explainable AI (Grad-CAM), Prompt Engineering, Feature Engineering, Model Training & Evaluation
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white print:text-slate-900 mb-1">Languages & DBs</h3>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Python, Java, C, SQL (MySQL, SQLite), JavaScript / TypeScript, PHP, HTML/CSS
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white print:text-slate-900 mb-1">Tools & Concepts</h3>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Git/GitHub, VS Code, Jupyter Notebook, Wireshark, VirtualBox, OOP, Data Structures, Algorithms, REST APIs, Agile Development, Cybersecurity Research
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
                  <span className="text-xs font-semibold text-accent-cyan print:text-slate-700">BNTS (US Non-Profit Education Organization)</span>
                </div>
                <span className="text-xs font-mono text-slate-500 print:text-slate-600">Oct 2024 - Mar 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-2">
                <li>Architected and deployed multilingual AI content translation pipelines supporting 10 languages, reducing localization turnaround time by 40%.</li>
                <li>Engineered an automated notes generation system using Large Language Models (LLMs) and advanced prompt engineering, increasing study material generation efficiency by 50%.</li>
                <li>Integrated an AI-powered quiz generation module and optimized API latency for OpenAI/LLM backends by 25% to ensure scalable infrastructure.</li>
              </ul>
            </div>

            {/* Intel */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-white print:text-slate-900 text-sm">Machine Learning Intern</h3>
                  <span className="text-xs font-semibold text-accent-cyan print:text-slate-700">Intel</span>
                </div>
                <span className="text-xs font-mono text-slate-500 print:text-slate-600">May 2024 - Jul 2024</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-2">
                <li>Developed and trained Machine Learning models for autonomous vehicle cut-in detection, improving predictive accuracy of vehicle maneuvers.</li>
                <li>Performed end-to-end data preprocessing, feature engineering, and class imbalance mitigation on large-scale sensor and telemetry datasets.</li>
                <li>Conducted model training, cross-validation, and performance analysis to establish baseline models meeting safety-critical latency requirements.</li>
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
                <li>Programmed efficient backend business logic using Python and C, optimizing memory management and application runtime performance.</li>
                <li>Implemented software engineering best practices, including modular design patterns, version control workflows, and unit testing.</li>
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
                VisionGuard AI | Explainable Eye Disease Detection
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> TensorFlow, Keras, Deep Learning, Computer Vision
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Built a deep learning healthcare platform using transfer learning (ResNet50/VGG16) to classify retinal eye diseases from OCT scans with 98.4% accuracy. Integrated Grad-CAM explainability to generate heatmaps visualising diagnostic decision regions, increasing trust for clinical decision support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                ResumeAI Pro | Generative AI Career Assistant
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> Flask, OpenAI API, Generative AI, Prompt Engineering
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Developed a Generative AI resume builder leveraging OpenAI APIs, Flask, and structured prompt engineering to optimize resumes for ATS compatibility. Built a vector-similarity match scoring system to analyze job descriptions against resumes, offering real-time keyword insertion recommendations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                AgriSense AI | Intelligent Crop & Fertilizer Recommendation Platform
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> Python, Scikit-Learn, Flask, Machine Learning
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Engineered an AI-driven agricultural decision support engine using Scikit-Learn to analyze soil composition (N, P, K, pH) and climate parameters. Achieved 100% crop classification accuracy (Random Forest) and 99.33% fertilizer recommendation accuracy (XGBoost), reducing fertilizer waste by 20–35%.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white print:text-slate-900">
                Heartbleed Vulnerability Research & Security Analysis Lab
              </h3>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                <span className="font-semibold">Technology:</span> Python, Wireshark, VirtualBox, Linux
              </p>
              <p className="text-slate-400 print:text-slate-600 mt-1">
                Constructed a secure, isolated sandbox environment using VirtualBox and Linux to analyze TLS heartbeat messages and intercept private keys. Conducted deep packet inspection using Wireshark to trace memory disclosure payloads during simulated Heartbleed exploits.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 print:text-slate-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-bold text-white print:text-slate-950 mb-1">AI & Machine Learning</h4>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Deep Learning with TensorFlow (Infosys) • Machine Learning using Python (Infosys) • AI Fundamentals with IBM (Cisco) • RPA Basics (Coursera)
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white print:text-slate-950 mb-1">Data & Software Systems</h4>
              <p className="text-slate-400 print:text-slate-600 leading-relaxed">
                Data Analytics Essentials (Cisco) • Tableau and Data Analytics (Infosys) • Agile and GitHub (Infosys) • JavaScript Essentials 1 & 2 (Cisco) • Cybersecurity and Privacy (NPTEL) • Human Computer Interaction (NPTEL)
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated metadata (Only visible in Print) */}
        <div className="hidden print:block text-right text-[9px] text-slate-400 mt-6 border-t border-slate-200 pt-3">
          Last Updated: June 2026 • Generated via bendavid95.github.io
        </div>

      </div>
    </div>
  );
}
