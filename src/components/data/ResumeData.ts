export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    color: string;
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
    linkedin: "linkedin .com/in/emmanuel-krishnandito",
    github: "github.com/KrishnanditoLksn",
    location: "Yogyakarta, Indonesia",
    experiences: [
        {
            company: "Bangkit Academy 2024",
            role: "Mobile Development Cohort",
            period: "2024 - Present",
            description: "Learning advanced Android development, architectural patterns (MVVM), and cloud computing basics. Developed Culture Connect as a capstone project.",
            color: "bg-neo-yellow"
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
