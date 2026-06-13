import projectList from "../../data/ProjectsData.jsx";

export default function ProjectContent() {
    return (
        <section id="/projects" className="py-24 px-6 bg-neo-white border-y-4 border-black">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <h2 className="text-6xl font-black uppercase tracking-tighter">
                        My <span className="bg-neo-green px-2 border-4 border-black">Projects</span>
                    </h2>
                    <p className="text-2xl font-bold">Discover all of my latest work and experiments.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectList().map((project, index) => (
                        <div
                            key={project.keyList || index}
                            className="neo-card bg-white group hover:-translate-y-2 transition-transform p-0 overflow-hidden"
                        >
                            <div className="border-b-4 border-black overflow-hidden h-52">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={project.image}
                                    alt={project.subtitle}
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="inline-block bg-neo-yellow px-3 py-1 border-2 border-black text-xs font-black uppercase">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-black uppercase leading-none">{project.title}</h3>
                                <p className="text-md font-medium text-gray-800 line-clamp-3">
                                    {project.description}
                                </p>
                                <a 
                                    href={project.link} 
                                    className="neo-button bg-neo-blue inline-block w-full text-center uppercase text-sm"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}