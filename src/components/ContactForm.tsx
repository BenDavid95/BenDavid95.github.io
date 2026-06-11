'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const templates = [
    {
      label: 'Recruiting for AI Lab / Startup',
      message: 'Hi Bendavid, we reviewed your VisionGuard AI and BNTS backend projects. We would love to discuss alignment for an AI/ML Engineering opportunity at our organization.',
    },
    {
      label: 'Schedule Technical Interview',
      message: 'Hi Bendavid, we would love to schedule a technical chat to walk through your experience in Deep Learning models and systems optimization.',
    },
    {
      label: 'General Collaboration',
      message: 'Hi Bendavid, I saw your portfolio and would love to connect to discuss potential research collaboration or product building.',
    },
  ];

  const applyTemplate = (msg: string) => {
    setFormData((prev) => ({ ...prev, message: msg }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all the required input fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Confetti celebration blast!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#6366f1', '#3b82f6'],
      });
      
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden no-print bg-bg-dark/20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center md:text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </h2>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-accent-purple to-accent-blue mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left panel: Info & links */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Let’s create something impactful.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                I am looking for full-time opportunities, internship opportunities, or startup collaboration in Artificial Intelligence, Machine Learning, and Software Systems. Feel free to reach out directly!
              </p>
            </div>

            {/* Direct details */}
            <div className="space-y-6 my-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <Mail className="h-5 w-5 text-accent-purple" />
                </div>
                <div>
                  <span className="block text-xxs font-mono text-slate-500 uppercase">Direct Email</span>
                  <a href="mailto:bendavid9510@gmail.com" className="text-sm font-semibold hover:text-white transition-colors">
                    bendavid9510@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <Phone className="h-5 w-5 text-accent-indigo" />
                </div>
                <div>
                  <span className="block text-xxs font-mono text-slate-500 uppercase">Call / WhatsApp</span>
                  <a href="https://wa.me/916382372387" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-white transition-colors">
                    +91 6382372387
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="h-5 w-5 text-accent-cyan" />
                </div>
                <div>
                  <span className="block text-xxs font-mono text-slate-500 uppercase">Base Location</span>
                  <span className="text-sm font-semibold">
                    Madurai, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/BenDavid95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/bendavid-d-walker-c-228996249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl border border-white/5 p-6 sm:p-8">
              
              {/* Recruiter Quick Presets */}
              <div className="mb-6">
                <span className="block text-xxs font-mono text-slate-500 uppercase mb-2">
                  Recruiter Message Presets (Click to autofill message)
                </span>
                <div className="flex flex-wrap gap-2">
                  {templates.map((tpl, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => applyTemplate(tpl.message)}
                      className="rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all px-3 py-1.5 text-xxs font-semibold text-slate-300 text-left"
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan/10 border border-accent-cyan/25">
                    <CheckCircle2 className="h-6 w-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">Message Transmission Confirmed</h3>
                    <p className="text-xs text-slate-400 mt-1">Thank you! Your inquiry has been sent. I will get back to you shortly.</p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all px-5 py-2.5 text-xs font-semibold text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xxs font-mono text-slate-400 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl bg-white/5 border border-white/5 focus:border-accent-purple focus:bg-white/[0.08] focus:ring-1 focus:ring-accent-purple outline-none px-4 py-3 text-sm text-white transition-all duration-200"
                        placeholder="Elon Musk"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xxs font-mono text-slate-400 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl bg-white/5 border border-white/5 focus:border-accent-purple focus:bg-white/[0.08] focus:ring-1 focus:ring-accent-purple outline-none px-4 py-3 text-sm text-white transition-all duration-200"
                        placeholder="elon@spacex.com"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xxs font-mono text-slate-400 uppercase">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full rounded-xl bg-white/5 border border-white/5 focus:border-accent-purple focus:bg-white/[0.08] focus:ring-1 focus:ring-accent-purple outline-none px-4 py-3 text-sm text-white transition-all duration-200 resize-none"
                      placeholder="Write your recruiter proposal here..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/25 p-3.5 text-xs text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent-purple to-accent-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-purple/25 transition-all duration-200 hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Sending Transmission...'
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Transmit Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
