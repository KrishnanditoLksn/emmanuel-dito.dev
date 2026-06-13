export interface Project {
    slug: string;
    keyList: number;
    title: string;
    subtitle: string;
    description: string;
    longDescription?: string;
    image: string;
    link: string;
    category: string;
    techStack?: string[];
}

const projectList = (): Project[] => [
    {
        slug: "arxi-vinder",
        keyList: 1,
        title: "Arxi.vinder",
        subtitle: "Python",
        description: "Paper Recommender System using Upper Confidence Bound with Content Based Filtering Approach",
        longDescription: "Arxi.vinder is a sophisticated research paper recommendation system. It leverages the Upper Confidence Bound (UCB) algorithm combined with a Content-Based Filtering approach to help researchers discover relevant academic papers from the ArXiv repository efficiently. The system balances exploration and exploitation to provide diverse yet relevant suggestions.",
        image: "https://github-production-user-asset-6210df.s3.amazonaws.com/96246664/542174624-c3aa2c41-fb1b-450c-aaef-f8e9a0d8fcaf.png",
        link: "https://github.com/arxi-vinder/arxiv_mobile",
        category: "personal-project",
        techStack: ["Python", "Machine Learning", "UCB Algorithm", "NLP"]
    },
    {
        slug: "ascipleus-cancer-detection",
        keyList: 2,
        title: "Ascipleus Cancer Detection",
        subtitle: "Kotlin",
        image: "https://github.com/user-attachments/assets/ec011999-e204-4d49-918e-5d1985188977",
        description: "Detect cancer disease using Image Classification and displayed Confidence Score",
        longDescription: "Ascipleus is a medical assistance application designed to aid in the early detection of skin cancer. By utilizing advanced Image Classification models, the app allows users to upload images of skin lesions and receive a prediction regarding the nature of the lesion, along with a confidence score to assist medical professionals in their diagnosis.",
        link: "https://github.com/KrishnanditoLksn/AslepsiusCancerDetection",
        category: "personal-project",
        techStack: ["Kotlin", "TensorFlow Lite", "Android SDK", "Image Processing"]
    },
    {
        slug: "culture-connect",
        keyList: 3,
        title: "Culture Connect",
        subtitle: "Kotlin",
        image: "https://github.com/user-attachments/assets/629215fa-9621-4cd9-8fc8-bb26dd90b99f",
        category: "capstone-project",
        description: "Capstone Project at Bangkit Academy 2024. Predict user mood and displayed best cafe recommendations with mood based",
        longDescription: "Culture Connect was developed as a Capstone Project for Bangkit Academy 2024. The application aims to enhance local tourism and culinary experiences by recommending cafes based on the user's current mood. It uses sentiment analysis and machine learning to match the vibe of a location with the psychological state of the user.",
        link: "https://github.com/CultureConnect2024/CultureConnect-MD",
        techStack: ["Kotlin", "Retrofit", "Google Maps API", "Sentiment Analysis"]
    },
    {
        slug: "ceritain-cerita",
        keyList: 4,
        title: "Certain Cerita App",
        subtitle: "Kotlin",
        image: "https://github.com/user-attachments/assets/319741e5-81c9-499b-a1c7-5a5f2888d398",
        category: "personal-project",
        description: "Story based app where user can read, and upload their Stories. Developed in 1 month.",
        longDescription: "Certain Cerita is a community-driven story-sharing platform. Built in just one month, it provides a seamless experience for users to read, upload, and interact with various stories. The app emphasizes user privacy and community engagement, requiring authentication for a personalized storytelling experience.",
        link: "https://github.com/KrishnanditoLksn/CeritainCerita",
        techStack: ["Kotlin", "Firebase Auth", "Firestore", "MVVM Architecture"]
    }
]

export default projectList;
