import SkillsData, { Skill } from "../../data/SkillsData";

const SkillList = () => {
    return (
        <section id="skills" className="py-12 md:py-24 px-4 md:px-6 bg-neo-bg">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
                {/* Section Header */}
                <div className="space-y-4 md:space-y-6">
                    <div className="inline-block bg-neo-yellow px-4 py-1 border-2 md:border-4 border-black text-xs font-black uppercase transform -rotate-1">
                        What I Know
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Technical <span className="underline decoration-4 md:underline-offset-8 md:decoration-8 decoration-neo-pink">Skills</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-2xl leading-tight">
                        A dynamic collection of programming languages and tools I've mastered to build impactful digital solutions.
                    </p>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {SkillsData.map((skill: Skill) => (
                        <div 
                            key={skill.id} 
                            className={`neo-card ${skill.color} p-6 md:p-8 flex flex-col space-y-4 md:space-y-6 transition-transform hover:-translate-y-4 hover:rotate-1`}
                        >
                            <div className="flex justify-between items-start">
                                {skill.src ? (
                                    <img 
                                        className="w-12 h-12 md:w-16 md:h-16 object-contain border-2 md:border-4 border-black bg-white p-2" 
                                        src={skill.src} 
                                        alt={skill.name} 
                                    />
                                ) : (
                                    <div className="w-12 h-12 md:w-16 md:h-16 border-2 md:border-4 border-black bg-white flex items-center justify-center text-xl md:text-2xl font-black">
                                        {skill.name[0]}
                                    </div>
                                )}
                                <span className="bg-white border-2 border-black px-2 py-1 text-[10px] md:text-xs font-black uppercase">
                                    EST {skill.est}
                                </span>
                            </div>

                            <div className="space-y-2 md:space-y-4">
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight border-b-2 md:border-b-4 border-black pb-2 inline-block">
                                    {skill.name}
                                </h3>
                                <p className="text-base md:text-lg font-bold leading-tight">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillList;
