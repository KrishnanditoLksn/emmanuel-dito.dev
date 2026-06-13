import javalogo from '../../assets/img_java.png'
import kotlinlogo from '../../assets/img_kotlin.png'
import pythonlogo from '../../assets/img_py.png'

export interface Skill {
    id: number;
    name: string;
    est: number;
    src?: any; // StaticImageData or string depending on import
}

const SkillsList: Skill[] = [
    {
        id: 1,
        name: "Java",
        est: 2022,
        src: javalogo
    },
    {
        id: 2,
        name: "Kotlin",
        est: 2023,
        src: kotlinlogo
    },
    {
        id: 3,
        name: "Python",
        est: 2022,
        src: pythonlogo
    },
    {
        id: 4,
        name: "Javascript",
        est: 2023,
    }
]

export default SkillsList