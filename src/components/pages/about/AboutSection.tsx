"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const currentExperiences = [
    {
      role: 'IT Engineer',
      company: 'PT Tri Usaha Sejahtera Pratama',
      period: 'Present',
      badge: 'Enterprise & Systems',
      description: 'Handling IT infrastructure, network systems, hardware maintenance, system troubleshooting, and providing dependable tech solutions for business operational continuity.',
      color: 'bg-neo-yellow',
      techStack: ['IT Infrastructure', 'Network Systems', 'Hardware', 'Troubleshooting']
    },
    {
      role: 'Facilitator',
      company: 'Pijak Academy by IBM',
      period: 'Present',
      badge: 'Tech Education & Mentorship',
      description: 'Facilitating and guiding learners through tech training programs, mentoring participants in software fundamentals and IBM curriculum tracks.',
      color: 'bg-neo-blue',
      techStack: ['Mentorship', 'Tech Facilitation', 'IBM Curriculum', 'Digital Skills']
    }
  ];

  const manifesto = [
    {
      number: '01',
      title: 'Mobile Enthusiast',
      description: 'Passionate about building seamless mobile experiences that bridge the gap between imagination and reality.'
    },
    {
      number: '02',
      title: 'Backend Explorer',
      description: 'Currently deep-diving into the architectural world of backend systems, ensuring robust and scalable foundations.'
    },
    {
      number: '03',
      title: 'Lifelong Learner',
      description: 'Studying at Universitas Sanata Dharma, constantly evolving with the ever-changing tech landscape.'
    }
  ];

  return (
    <div id="about" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16 md:space-y-24 overflow-hidden">
      {/* Hero Section of About */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            Hi, I'm <span className="bg-neo-yellow px-2 border-2 md:border-4 border-black inline-block transform -rotate-2">Dito</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-xl">
            Emmanuel Krishnandito Laksana. A software developer focused on crafting impactful digital solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="neo-card bg-neo-blue transform rotate-0 md:rotate-1"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase">My Mission</h3>
          <p className="text-lg font-medium leading-relaxed">
            I believe in building software that is not just functional, but sustainable and accessible. My approach is rooted in clean code, purposeful design, and a relentless drive to solve complex problems through technology.
          </p>
        </motion.div>
      </div>

      {/* Current Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 md:border-b-8 border-black pb-4">
          <div>
            <span className="bg-neo-pink px-3 py-1 text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black inline-block mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Where I Am Currently Active
            </span>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
              Current Experience
            </h3>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto bg-neo-green border-2 md:border-4 border-black px-3 md:px-4 py-2 shadow-neo">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
            </span>
            <span className="text-xs md:text-sm font-black uppercase tracking-wider">Active Roles</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {currentExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`neo-card ${exp.color} p-6 md:p-8 flex flex-col justify-between space-y-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-neo-lg`}
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black/20 pb-3">
                  <span className="bg-white border-2 border-black px-2.5 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {exp.badge}
                  </span>
                  <span className="bg-black text-white border-2 border-black px-2.5 py-1 text-xs font-black uppercase">
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl sm:text-3xl font-black uppercase leading-tight">
                    {exp.role}
                  </h4>
                  <p className="text-lg md:text-xl font-black text-black/80 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-base md:text-lg font-medium leading-relaxed text-black/90">
                  {exp.description}
                </p>
              </div>

              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white border-2 border-black px-2.5 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Manifesto Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {manifesto.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`neo-card ${index === 1 ? 'bg-neo-pink animate-neo-float-reverse' : index === 2 ? 'bg-neo-green animate-neo-float-slow' : 'bg-white animate-neo-float'} transform transition-transform hover:-translate-y-4 hover:rotate-0`}
          >
            <span className="text-5xl font-black opacity-20 block mb-4">{item.number}</span>
            <h4 className="text-2xl font-black mb-4 uppercase">{item.title}</h4>
            <p className="text-lg font-medium">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
