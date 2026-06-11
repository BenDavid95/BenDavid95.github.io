'use client';

import React, { useState } from 'react';
import NeuralBackground from '@/components/NeuralBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsRadar from '@/components/SkillsRadar';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';
import GithubWidget from '@/components/GithubWidget';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import RecruiterView from '@/components/RecruiterView';

export default function Home() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleRecruiterMode = () => {
    setRecruiterMode((prev) => !prev);
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Interactive Background - Only active in Standard View and hidden in print */}
      {!recruiterMode && <NeuralBackground />}

      {/* Persistent Navigation Bar (Hidden in Print) */}
      <Navbar recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />

      {/* Main Page Layout */}
      <main className="flex-1 z-10">
        {recruiterMode ? (
          <RecruiterView onBack={toggleRecruiterMode} />
        ) : (
          <div className="flex flex-col">
            <Hero
              onViewProjects={scrollToProjects}
              onContact={scrollToContact}
              onDownloadResume={toggleRecruiterMode}
            />
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-12">
              <About />
              <ExperienceTimeline />
              <SkillsRadar />
              <Projects />
              <GithubWidget />
              <ContactForm />
            </div>
          </div>
        )}
      </main>

      {/* Footer (Hidden in Recruiter Mode print) */}
      <Footer />
    </div>
  );
}
