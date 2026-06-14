import SkillsData, { Skill } from "../../data/SkillsData";
import Image from "next/link"; // For the sake of consistency with existing imports, though ideally next/image

const SkillList = () => {
    return (
        <section id="skills" className="py-12 md:py-24 px-4 md:px-6 bg-neo-bg">
            <div className="max-w-5xl mx-auto space-y-20">
                {/* Section Header - Blog Style */}
                <div className="space-y-6 border-b-8 border-black pb-12">
                    <div className="inline-block bg-neo-yellow px-4 py-1 border-2 md:border-4 border-black text-xs font-black uppercase transform -rotate-1">
                        Technical Expertise
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Latest from my <br />
                        <span className="underline decoration-8 underline-offset-8 decoration-neo-blue">Tech Stack</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-2xl leading-tight">
                        Insights and in-depth explanations of the programming languages I use to build sustainable and high-performance digital experiences.
                    </p>
                </div>
                
                {/* Skills Sections - Article Style */}
                <div className="space-y-32">
                    {SkillsData.map((skill: Skill, index: number) => (
                        <article 
                            key={skill.id} 
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}
                        >
                            {/* Skill Visual */}
                            <div className="w-full lg:w-1/3 flex-shrink-0">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                                    <div className={`relative border-4 border-black ${skill.color} flex items-center justify-center aspect-square overflow-hidden`}>
                                        {skill.src ? (
                                            <img 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                src={skill.src.src} 
                                                alt={skill.name} 
                                            />
                                        ) : (
                                            <div className="text-8xl font-black">{skill.name[0]}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Skill Content */}
                            <div className="w-full lg:w-2/3 space-y-6">
                                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-500">
                                    <span>{skill.est} — Experience Start</span>
                                    <span className="w-8 h-1 bg-black/20"></span>
                                    <span className="text-black">Programming Language</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none group">
                                    <span className="bg-white border-b-4 border-transparent group-hover:border-black transition-all">
                                        {skill.name}
                                    </span>
                                </h2>   

                                <div className="neo-card bg-white p-8 md:p-10">
                                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-800">
                                        {skill.description}
                                    </p>
                                    <div className="mt-8 pt-8 border-t-2 border-black/10">
                                        <p className="text-lg font-medium text-gray-600 italic">
                                            As a focus in my development process, {skill.name} allows me to solve complex problems through clean and efficient code structures, mirroring the architectural standards of modern software engineering.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA - Blog Style */}
                <div className="neo-card bg-black text-white p-12 text-center space-y-8 mt-40">
                    <h3 className="text-4xl md:text-5xl font-black uppercase">Ready to start a project?</h3>
                    <p className="text-xl font-bold text-gray-400">Let's combine these technologies to build something amazing.</p>
                    <div className="pt-4">
                        <a href="/resume" className="neo-button bg-neo-yellow text-black text-xl px-12 py-4 inline-block uppercase font-black">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillList;
