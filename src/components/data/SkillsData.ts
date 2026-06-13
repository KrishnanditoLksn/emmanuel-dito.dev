import javalogo from '../../assets/img_java.png'
import kotlinlogo from '../../assets/img_kotlin.png'
import pythonlogo from '../../assets/img_py.png'

export interface Skill {
    id: number;
    name: string;
    est: number;
    src?: any;
    description: string;
    color: string;
}

const SkillsList: Skill[] = [
    {
        id: 1,
        name: "Java",
        est: 2022,
        src: javalogo,
        description: "Experienced in building robust enterprise applications and Android development using Java's object-oriented principles.",
        color: "bg-neo-yellow"
    },
    {
        id: 2,
        name: "Kotlin",
        est: 2023,
        src: kotlinlogo,
        description: "Focusing on modern Android development with Coroutines and Jetpack Compose for seamless mobile experiences.",
        color: "bg-neo-blue"
    },
    {
        id: 3,
        name: "Python",
        est: 2022,
        src: pythonlogo,
        description: "Utilizing Python for data analysis, automation scripts, and backend services with frameworks like Flask and FastAPI.",
        color: "bg-neo-green"
    },
    {
        id: 4,
        name: "Javascript",
        est: 2023,
        description: "Crafting interactive web interfaces and modern full-stack applications using React, Next.js, and Node.js.",
        color: "bg-neo-pink"
    }
]

export default SkillsList;
