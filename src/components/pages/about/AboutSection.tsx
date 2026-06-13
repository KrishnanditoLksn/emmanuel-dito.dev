import React from 'react';

const AboutSection = () => {
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
    <div id="about" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16 md:space-y-24">
      {/* Hero Section of About */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            Hi, I'm <span className="bg-neo-yellow px-2 border-2 md:border-4 border-black inline-block transform -rotate-2">Dito</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-xl">
            Emmanuel Krishnandito Laksana. A software developer focused on crafting impactful digital solutions.
          </p>
        </div>
        
        <div className="neo-card bg-neo-blue transform rotate-0 md:rotate-1">
          <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase">My Mission</h3>
          <p className="text-lg font-medium leading-relaxed">
            I believe in building software that is not just functional, but sustainable and accessible. My approach is rooted in clean code, purposeful design, and a relentless drive to solve complex problems through technology.
          </p>
        </div>
      </div>

      {/* Manifesto Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {manifesto.map((item, index) => (
          <div 
            key={index} 
            className={`neo-card ${index === 1 ? 'bg-neo-pink animate-neo-float-reverse' : index === 2 ? 'bg-neo-green animate-neo-float-slow' : 'bg-white animate-neo-float'} transform transition-transform hover:-translate-y-4 hover:rotate-0`}
          >
            <span className="text-5xl font-black opacity-20 block mb-4">{item.number}</span>
            <h4 className="text-2xl font-black mb-4 uppercase">{item.title}</h4>
            <p className="text-lg font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
