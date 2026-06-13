import {AiFillGithub as Github, AiFillLinkedin as Linkedin} from "react-icons/ai";

export const FooterContent = () => {
    return (
        <footer className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="neo-button bg-neo-yellow text-black text-2xl inline-block">
                        Dits Dev
                    </div>
                    <p className="text-xl font-bold max-w-sm text-gray-400">
                        Building the future of software with a focus on simplicity, sustainability, and neobrutalist aesthetics.
                    </p>
                </div>
                
                <div className="space-y-8 md:text-right">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Reach me on</h2>
                    <ul className="flex flex-col md:items-end space-y-4">
                        <li>
                            <a 
                                href="https://github.com/KrishnanditoLksn"
                                className="neo-button bg-white text-black flex items-center space-x-3 w-48 justify-center"
                            >
                                <Github size="24px" />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/emmanuel-krishnandito-laksana-3981b2251/"
                                className="neo-button bg-neo-blue text-black flex items-center space-x-3 w-48 justify-center"
                            >
                                <Linkedin size="24px" />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-2 border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 font-bold">
                <p>© 2026 Dits Dev™. Crafted with passion and neobrutalism.</p>
                <p>All Rights Reserved.</p>
            </div>
        </footer>
    )
}