import Header from "./navbar/Navbar.jsx";
import About from "../About.jsx";
import ProjectSection from "./project/ProjectSection.jsx";
import {FooterSection} from "./footer/FooterSection.jsx";
import DescriptionSection from "./section/DescriptionSection.jsx";
import ContactResumeContent from "./contact/ContactResumeContent.jsx";
import Skills from "../Skills.jsx";

export default function Pages() {
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