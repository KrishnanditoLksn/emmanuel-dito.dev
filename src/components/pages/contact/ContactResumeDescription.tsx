"use client";

import {resumeDownloader} from "../../../helper/ResumeDownloader";

export default function ContactResumeDescription() {
    return (
        <section id="resume" className="py-32 px-6 bg-neo-pink border-t-4 border-black">
            <div className="max-w-4xl mx-auto neo-card bg-white text-center space-y-10">
                <h2 className="text-5xl font-black uppercase tracking-tighter">
                    Need my <span className="bg-neo-blue px-2 border-4 border-black inline-block transform -rotate-1">Resume</span>?
                </h2>
                <p className="text-2xl font-bold">
                    I've prepared a detailed document of my experiences and skills just for you.
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={resumeDownloader}
                        className="neo-button bg-neo-yellow text-2xl uppercase tracking-widest py-4 px-10"
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    )
}