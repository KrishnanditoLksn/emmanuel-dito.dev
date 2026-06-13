import Header from "../components/pages/navbar/Navbar";
import About from "../components/About";
import ProjectSection from "../components/pages/project/ProjectSection";
import {FooterSection} from "../components/pages/footer/FooterSection";
import DescriptionSection from "../components/pages/section/DescriptionSection";
import ContactResumeContent from "../components/pages/contact/ContactResumeContent";
import Skills from "../components/Skills";

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
