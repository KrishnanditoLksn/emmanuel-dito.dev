import Link from "next/link";
import projectList, { Project } from "../../data/ProjectsData";

export default function ProjectContent() {
    return (
        <section id="/projects" className="py-12 md:py-24 px-4 md:px-6 bg-neo-white border-y-4 border-black">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
                <div className="space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
                        My <span className="bg-neo-green px-2 border-2 md:border-4 border-black">Projects</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-bold leading-tight">Discover all of my latest work and experiments.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {projectList().map((project: Project, index: number) => (
                        <div
                            key={project.keyList || index}
                            className="neo-card bg-white group hover:-translate-y-2 transition-transform p-0 overflow-hidden"
                        >
                            <div className="border-b-2 md:border-b-4 border-black overflow-hidden h-48 md:h-52">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={project.image}
                                    alt={project.subtitle}
                                />
                            </div>
                            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                                <div className="inline-block bg-neo-yellow px-3 py-1 border-2 border-black text-[10px] md:text-xs font-black uppercase">
                                    {project.category}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black uppercase leading-none">{project.title}</h3>
                                <p className="text-sm md:text-md font-medium text-gray-800 line-clamp-3">
                                    {project.description}
                                </p>
                                <Link 
                                    href={`/projects/${project.slug}`} 
                                    className="neo-button bg-neo-blue inline-block w-full text-center uppercase text-xs md:text-sm py-3"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}