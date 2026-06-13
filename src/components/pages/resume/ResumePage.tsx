"use client";

import React from 'react';
import { resumeDownloader } from "../../../helper/ResumeDownloader";
import { resumeData, Experience, Education } from "../../data/ResumeData";

const ResumePageContent = () => {
  return (
    <div className="min-h-screen bg-neo-bg py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="neo-card bg-white p-10 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">
                Curriculum <span className="bg-neo-pink px-2 border-4 border-black inline-block transform -rotate-1">Vitae</span>
              </h1>
              <p className="text-2xl font-bold text-gray-700">{resumeData.name}</p>
              <p className="text-lg font-bold text-gray-500 uppercase tracking-widest">{resumeData.title}</p>
            </div>
            <button 
              onClick={resumeDownloader}
              className="neo-button bg-neo-yellow text-xl uppercase font-black"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tight border-b-8 border-black pb-2 inline-block">
              Experience
            </h2>
            <div className="space-y-8">
              {resumeData.experiences.map((exp: Experience, index: number) => (
                <div key={index} className={`neo-card ${exp.color} p-8 space-y-4`}>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-black uppercase leading-none">{exp.role}</h3>
                    <span className="bg-white border-2 border-black px-2 py-1 text-xs font-black uppercase whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-lg font-black tracking-tight">{exp.company}</p>
                  <p className="text-md font-medium leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Other Section */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tight border-b-8 border-black pb-2 inline-block">
                Education
              </h2>
              <div className="space-y-8">
                {resumeData.education.map((edu: Education, index: number) => (
                  <div key={index} className={`neo-card ${edu.color} p-8 space-y-4`}>
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-2xl font-black uppercase leading-none">{edu.degree}</h3>
                      <span className="bg-white border-2 border-black px-2 py-1 text-xs font-black uppercase whitespace-nowrap">{edu.period}</span>
                    </div>
                    <p className="text-lg font-black tracking-tight">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tight border-b-8 border-black pb-2 inline-block">
                Contact Info
              </h2>
              <div className="neo-card bg-white p-8 space-y-4 font-bold text-lg">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-widest">Email</span>
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-widest">LinkedIn</span>
                  <span>{resumeData.linkedin}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-widest">GitHub</span>
                  <span>{resumeData.github}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-widest">Location</span>
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
