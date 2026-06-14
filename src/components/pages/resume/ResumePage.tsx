"use client";

import React, { useState } from 'react';
import { resumeDownloader } from "../../../helper/ResumeDownloader";
import { resumeData, Experience, Education } from "../../data/ResumeData";

const ResumePageContent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(resumeData.experiences.length / itemsPerPage);
  
  const currentExperiences = resumeData.experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-neo-bg py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
        {/* Header Section */}
        <div className="neo-card bg-white p-6 md:p-10 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Curriculum <span className="bg-neo-pink px-2 border-2 md:border-4 border-black inline-block transform -rotate-1">Vitae</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-700">{resumeData.name}</p>
              <p className="text-base md:text-lg font-bold text-gray-500 uppercase tracking-widest leading-none">{resumeData.title}</p>
            </div>
            <button 
              onClick={resumeDownloader}
              className="neo-button bg-neo-yellow text-lg md:text-xl uppercase font-black w-full md:w-auto py-4 px-8"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Experience Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex justify-between items-end border-b-4 md:border-b-8 border-black pb-2">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight inline-block">
                Experience
              </h2>
              {/* Pagination Buttons */}
              <div className="flex gap-2 mb-1">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className={`p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all ${currentPage === 0 ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-white hover:bg-neo-yellow'}`}
                  aria-label="Previous page"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  className={`p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all ${currentPage === totalPages - 1 ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-white hover:bg-neo-yellow'}`}
                  aria-label="Next page"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
            
            <div className="space-y-6 md:space-y-8 min-h-[400px]">
              {currentExperiences.map((exp: Experience, index: number) => (
                <div key={index} className={`neo-card ${exp.color} p-6 md:p-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-black uppercase leading-none">{exp.role}</h3>
                    <span className="bg-white border-2 border-black px-2 py-1 text-[10px] md:text-xs font-black uppercase whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-base md:text-lg font-black tracking-tight">{exp.company}</p>
                  <p className="text-sm md:text-md font-medium leading-relaxed">{exp.description}</p>
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.techStack.map((tech, i) => (
                        <span key={i} className="bg-white border-2 border-black px-2 py-0.5 text-[10px] md:text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {currentExperiences.length === 0 && (
                <p className="text-gray-500 font-bold italic">No more experiences to show.</p>
              )}
            </div>
            
            {/* Page indicator */}
            <div className="text-right text-[10px] font-black uppercase tracking-widest text-gray-400">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>

          {/* Education & Other Section */}
          <div className="space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight border-b-4 md:border-b-8 border-black pb-2 inline-block">
                Education
              </h2>
              <div className="space-y-6 md:space-y-8">
                {resumeData.education.map((edu: Education, index: number) => (
                  <div key={index} className={`neo-card ${edu.color} p-6 md:p-8 space-y-4`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <h3 className="text-xl md:text-2xl font-black uppercase leading-none">{edu.degree}</h3>
                      <span className="bg-white border-2 border-black px-2 py-1 text-[10px] md:text-xs font-black uppercase whitespace-nowrap">{edu.period}</span>
                    </div>
                    <p className="text-base md:text-lg font-black tracking-tight">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight border-b-4 md:border-b-8 border-black pb-2 inline-block">
                Contact Info
              </h2>
              <div className="neo-card bg-white p-6 md:p-8 space-y-4 font-bold text-base md:text-lg">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email</span>
                  <span className="break-all">{resumeData.email}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">LinkedIn</span>
                  <span className="break-all">{resumeData.linkedin}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">GitHub</span>
                  <span className="break-all">{resumeData.github}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Location</span>
                  <span>{resumeData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePageContent;
