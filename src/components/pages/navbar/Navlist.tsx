"use client";

import Link from "next/link";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import NavigationList from "../../ui/navigation/NavigationList";

const Navlist = () => {
    const [isOpen, setIsOpen] = useState(false)
    const showNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="sticky top-0 z-50 bg-neo-bg border-b-4 border-black py-4 px-4 md:px-0">
            <div className="max-w-7xl mx-auto px-2 md:px-6 flex items-center justify-between">
                <Link href="/" className="neo-button bg-neo-yellow text-lg md:text-xl py-2 px-4">
                    Dits Dev
                </Link>
                
                <div className="hidden md:block">
                    <NavigationList 
                        divClassName={"flex space-x-8"}
                        hrefClassName={"text-lg font-black uppercase hover:underline decoration-4 underline-offset-8 transition-all"}
                    />
                </div>

                <button className="text-2xl md:hidden neo-button bg-white p-3 flex items-center justify-center" onClick={showNav} aria-hidden="true">
                    {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-neo-bg transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
                    <NavigationList
                        navClassName="w-full"
                        divClassName={"flex flex-col items-center space-y-8"}
                        hrefClassName={"text-3xl font-black uppercase tracking-tighter"}
                    />
                    <div className="pt-8">
                        <button className="neo-button bg-neo-pink text-xl py-4 px-12 uppercase font-black" onClick={showNav}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navlist