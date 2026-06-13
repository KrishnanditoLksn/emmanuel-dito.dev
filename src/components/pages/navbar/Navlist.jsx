"use client";

import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import NavigationList from "../../ui/navigation/NavigationList.jsx";

const Navlist = () => {
    const [isOpen, setIsOpen] = useState(false)
    const showNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="sticky top-0 z-50 bg-neo-bg border-b-4 border-black py-4">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="neo-button bg-neo-yellow text-xl">
                    Dits Dev
                </div>
                
                <div className="hidden md:block">
                    <NavigationList 
                        divClassName={"flex space-x-8"}
                        hrefClassName={"text-lg font-black uppercase hover:underline decoration-4 underline-offset-4"}
                    />
                </div>

                <button className="text-3xl md:hidden neo-button bg-white p-2" onClick={showNav} aria-hidden="true">
                    {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-neo-bg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col items-center justify-center h-full space-y-12">
                    <NavigationList
                        navClassName="w-full"
                        divClassName={"flex flex-col items-center space-y-8"}
                        hrefClassName={"text-4xl font-black uppercase"}
                    />
                    <button className="neo-button bg-neo-pink text-xl" onClick={showNav}>
                        Close
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navlist