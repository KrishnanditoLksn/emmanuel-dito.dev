"use client";

import React from 'react';
import { resumeDownloader } from "../../../helper/ResumeDownloader";
import { resumeData, Experience, Education } from "../../data/ResumeData";

const ResumePageContent = () => {
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
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight border-b-4 md:border-b-8 border-black pb-2 inline-block">
              Experience
            </h2>
            <div className="space-y-6 md:space-y-8">
              {resumeData.experiences.map((exp: Experience, index: number) => (
                <div key={index} className={`neo-card ${exp.color} p-6 md:p-8 space-y-4`}>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-black uppercase leading-none">{exp.role}</h3>
                    <span className="bg-white border-2 border-black px-2 py-1 text-[10px] md:text-xs font-black uppercase whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-base md:text-lg font-black tracking-tight">{exp.company}</p>
                  <p className="text-sm md:text-md font-medium leading-relaxed">{exp.description}</p>
                </div>
              ))}
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
