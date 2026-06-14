export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    color: string;
    techStack?: string[];
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    color: string;
}

export interface ResumeData {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
    experiences: Experience[];
    education: Education[];
}

export const resumeData: ResumeData = {
    name: "Emmanuel Krishnandito Laksana",
    title: "Informatics Student & Mobile Developer",
    email: "mrlaksana99@gmail.com",
    linkedin: "linkedin.com/in/emmanuel-krishnandito",
    github: "github.com/KrishnanditoLksn",
    location: "Yogyakarta, Indonesia",
    experiences: [
         {
            company: "PT. Sistem Integrasi Medika",
            role: "Backend Developer Intern",
            period: "Mar 2026 - Present",
            description: "Learning advanced software development practices, contributing to real-world projects, and gaining experience in a professional software development environment.",
            color: "bg-neo-green",
            techStack: ["React JS", "GraphQL", "Golang"]
        }, 
        {
            company: "PT. Kode Kolektif",
            role: "Software Developer Intern",
            period: "Sept 2025 - Dec 2025",
            description: "Learning advanced software development practices, contributing to real-world projects, and gaining experience in a professional software development environment.",
            color: "bg-neo-purple",
            techStack: ["PHP", "Laravel"]
        }, 
        
        {
            company: "Bangkit Academy 2024",
            role: "Mobile Development Cohort",
            period: " Sept 2024 - January 2025",
            description: "Learning advanced Android development, architectural patterns (MVVM), and cloud computing basics. Developed Culture Connect as a capstone project.",
            color: "bg-neo-yellow",
            techStack: ["Android", "Kotlin"]
        },
        {
            company: "Universitas Sanata Dharma",
            role: "Informatics Student",
            period: "2022 - Present",
            description: "Focusing on System Development, Backend technologies, and Software Engineering principles.",
            color: "bg-neo-blue"
        }
    ],
    education: [
        {
            school: "Universitas Sanata Dharma",
            degree: "Bachelor of Informatics",
            period: "2022 - Present",
            color: "bg-neo-green"
        }
    ]
};
