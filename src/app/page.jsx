import Header from "../components/pages/navbar/Navbar.jsx";
import About from "../components/About.jsx";
import ProjectSection from "../components/pages/project/ProjectSection.jsx";
import {FooterSection} from "../components/pages/footer/FooterSection.jsx";
import DescriptionSection from "../components/pages/section/DescriptionSection.jsx";
import ContactResumeContent from "../components/pages/contact/ContactResumeContent.jsx";
import Skills from "../components/Skills.jsx";

export default function Home() {
    return (
        <main className="min-h-screen bg-neo-bg text-black font-body overflow-x-hidden">
            <Header />
            <About />
            <DescriptionSection />
            <Skills />
            <ProjectSection />
            <ContactResumeContent />
            <FooterSection />
        </main>
    )
}
