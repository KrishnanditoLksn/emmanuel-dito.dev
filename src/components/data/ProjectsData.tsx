export interface Project {
    keyList: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
    category: string;
}

const projectList = (): Project[] => [
    {
        keyList: 1,
        title: "Arxi.vinder",
        subtitle: "Python",
        description: "Paper Recommender System using Upper Confidence Bound with Content Based Filtering Approach",
        image: "https://github-production-user-asset-6210df.s3.amazonaws.com/96246664/542174624-c3aa2c41-fb1b-450c-aaef-f8e9a0d8fcaf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260129T120916Z&X-Amz-Expires=300&X-Amz-Signature=44d0a5fea1f1e3882291ca006104e18cdae22237e1125b0f573b164b4c3fcca1&X-Amz-SignedHeaders=host",
        link: "https://github.com/arxi-vinder/arxiv_mobile",
        category: "personal-project"
    },
    {
        keyList: 2,
        title: "Ascipleus Cancer Detection App",
        subtitle: "Kotlin",
        image: "https://github.com/user-attachments/assets/ec011999-e204-4d49-918e-5d1985188977",
        description: "Detect cancer disease using Image Classification and displayed Confidence Score",
        link: "https://github.com/KrishnanditoLksn/AslepsiusCancerDetection",
        category: "personal-project"
    },
    {
        keyList: 3,
        title: "Culture Connect Cafe Recommendation",
        subtitle: "Kotlin",
        image: "https://github.com/user-attachments/assets/629215fa-9621-4cd9-8fc8-bb26dd90b99f",
        category: "capstone-project",
        description: "Capstone Project at Bangkit Academy 2024.Predict user mood and displayed best cafe recommendations with mood based",
        link: "https://github.com/CultureConnect2024/CultureConnect-MD"
    },
    {
        keyList: 4,
        title: "Certain Cerita App",
        subtitle: "Kotlin",
        image: "https://github.com/user-attachments/assets/319741e5-81c9-499b-a1c7-5a5f2888d398",
        category: "personal-project",
        description: "Story based app where user can read , and upload their Stories.Developed in 1 month.Users must register their account to access this app.",
        link: "https://github.com/KrishnanditoLksn/CeritainCerita"
    }
]

export default projectList