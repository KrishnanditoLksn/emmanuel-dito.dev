import projectList from "../../../components/data/ProjectsData";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = projectList();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectList().find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neo-bg py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Breadcrumb */}
        <Link href="/projects" className="neo-button bg-white text-xs font-black uppercase inline-block mb-4">
          ← Back to Projects
        </Link>

        {/* Hero Section: Judul & Ringkasan Repo */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block bg-neo-yellow px-4 py-1 border-4 border-black text-xs font-black uppercase transform -rotate-1">
              {project.category}
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              {project.title}
            </h1>
          </div>
          
          <div className="border-l-8 border-black pl-8 max-w-4xl">
            <h2 className="text-xs font-black uppercase text-gray-500 mb-2 tracking-[0.2em]">Ringkasan Repo</h2>
            <p className="text-2xl md:text-3xl font-bold leading-tight text-black">
              {project.description}
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
          <div className="relative border-4 border-black overflow-hidden bg-white aspect-video">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Description (Overview) */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tight">
                Overview
              </h2>
              <div className="neo-card bg-white p-8">
                <p className="text-xl font-medium leading-relaxed text-gray-800 whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar: Tech Stack Repo & Info */}
          <aside className="space-y-12">
            <div className="neo-card bg-neo-blue p-8 space-y-8">
              <div>
                <h3 className="text-xs font-black uppercase text-black/60 mb-6 tracking-[0.2em] border-b-2 border-black/20 pb-2">
                  Tech Stack Repo
                </h3>
                {project.techStack && (
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="bg-white border-2 border-black px-3 py-1 text-sm font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase text-black/60 mb-2 tracking-[0.2em]">
                    Platform / Focus
                  </h4>
                  <p className="text-lg font-black uppercase">{project.subtitle}</p>
                </div>

                <div className="pt-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-button bg-neo-green w-full block text-center uppercase font-black text-sm py-4"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
