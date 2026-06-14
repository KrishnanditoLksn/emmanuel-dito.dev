import Link from "next/link";
import projectList, { Project } from "../../data/ProjectsData";

export default function ProjectContent() {
    const projects = projectList();
    const featuredProject = projects[0];
    const regularProjects = projects.slice(1);

    return (
        <section id="/projects" className="py-12 md:py-24 px-4 md:px-6 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header */}
                <div className="space-y-4 border-b-4 border-black pb-8">
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Latest <br />
                        <span className="bg-neo-green px-4 border-4 border-black inline-block transform -rotate-1">Works</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-2xl leading-tight">
                        A collection of digital experiences, mobile applications, and experimental systems built with precision and passion.
                    </p>
                </div>

                {/* Featured Project */}
                {featuredProject && (
                    <article className="group relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-white border-4 border-black p-6 md:p-10 shadow-neo-lg hover:shadow-neo transition-all">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="bg-neo-yellow px-3 py-1 border-2 border-black text-xs font-black uppercase">
                                    Featured Project
                                </span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    {featuredProject.subtitle}
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight group-hover:underline decoration-neo-blue decoration-8 underline-offset-4">
                                <Link href={`/projects/${featuredProject.slug}`}>
                                    {featuredProject.title}
                                </Link>
                            </h3>
                            <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                                {featuredProject.longDescription || featuredProject.description}
                            </p>
                            <div className="pt-4 flex flex-wrap gap-2">
                                {featuredProject.techStack?.slice(0, 3).map((tech) => (
                                    <span key={tech} className="text-xs font-black uppercase text-gray-400">#{tech}</span>
                                ))}
                            </div>
                            <Link 
                                href={`/projects/${featuredProject.slug}`}
                                className="inline-flex items-center gap-2 text-xl font-black uppercase group-hover:gap-4 transition-all"
                            >
                                Read more 
                                <span className="bg-black text-white p-2 rounded-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </span>
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 overflow-hidden border-4 border-black aspect-[16/10]">
                            <img 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                src={featuredProject.image} 
                                alt={featuredProject.title} 
                            />
                        </div>
                    </article>
                )}

                {/* Grid for Regular Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {regularProjects.map((project: Project, index: number) => (
                        <article 
                            key={project.keyList || index}
                            className="flex flex-col space-y-6 group"
                        >
                            <div className="relative overflow-hidden border-4 border-black aspect-square shadow-neo hover:shadow-neo-lg transition-all transform hover:-translate-y-1">
                                <Link href={`/projects/${project.slug}`}>
                                    <img 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                        src={project.image} 
                                        alt={project.title} 
                                    />
                                </Link>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white border-2 border-black px-3 py-1 text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {project.subtitle}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                                    {project.category.replace('-', ' ')}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black uppercase leading-tight group-hover:text-neo-blue transition-colors">
                                    <Link href={`/projects/${project.slug}`}>
                                        {project.title}
                                    </Link>
                                </h4>
                                <p className="text-md font-medium text-gray-600 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="pt-2">
                                    <Link 
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-black uppercase border-b-2 border-black pb-1 hover:border-neo-blue transition-all"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Interruption / Newsletter-style Banner */}
                <div className="bg-neo-yellow border-4 border-black p-8 md:p-12 text-center space-y-6 shadow-neo">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Have a vision for a project?</h3>
                    <p className="text-xl font-bold max-w-2xl mx-auto">I'm always looking for interesting collaborations and challenging problems to solve.</p>
                    <div className="pt-4">
                        <Link href="/resume" className="neo-button bg-black text-white px-8 py-3 uppercase font-black hover:bg-white hover:text-black transition-colors">
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}