import SkillsData from "../../data/SkillsData.jsx";

const SkillList = () => {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-6xl font-black uppercase tracking-tighter">
                        Technical <span className="bg-neo-yellow px-2 border-4 border-black inline-block transform rotate-1">Skills</span>
                    </h2>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8">
                    {SkillsData.map((skill) => (
                        <div 
                            key={skill.name} 
                            className="neo-card bg-white w-40 h-40 flex flex-col items-center justify-center space-y-4 hover:bg-neo-blue transition-colors group"
                        >
                            <img 
                                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" 
                                src={skill.src} 
                                alt={skill.name} 
                            />
                            <h3 className="text-lg font-black uppercase tracking-tight">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillList;
