import { AiFillGithub as Github, AiFillLinkedin as Linkedin } from "react-icons/ai";
import Link from "next/link";

export const FooterContent = () => {
    return (
        <footer className="bg-black text-white border-t-4 border-black">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand & Copyright */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="neo-button bg-neo-yellow text-black text-xl py-2 px-4">
                            Dits Dev
                        </Link>
                        <p className="text-sm font-bold text-gray-500 tracking-wide uppercase">
                            © 2026 Crafted with Neobrutalism
                        </p>
                    </div>
                    
                    {/* Minimalist Navigation/Links */}
                    <div className="flex items-center gap-10">
                        <a 
                            href="https://github.com/KrishnanditoLksn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 text-lg font-black uppercase tracking-tighter"
                        >
                            <Github size="20px" />
                            <span>Github</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/emmanuel-krishnandito-laksana-3981b2251/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neo-blue transition-colors flex items-center gap-3 text-lg font-black uppercase tracking-tighter"
                        >
                            <Linkedin size="20px" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
