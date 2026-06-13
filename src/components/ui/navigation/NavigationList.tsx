"use client";

import {Link} from "react-scroll";

interface NavigationListProps {
    divClassName?: string;
    navClassName?: string;
    hrefClassName?: string;
}

export default function NavigationList({ divClassName, navClassName, hrefClassName }: NavigationListProps) {
    return (
        <nav className={navClassName}>
            <div className={divClassName}>
                <Link 
                    to="about" 
                    smooth={true} 
                    className={`${hrefClassName} cursor-pointer`}
                >
                    About
                </Link>
                <Link 
                    to="skills" 
                    smooth={true} 
                    className={`${hrefClassName} cursor-pointer`}
                >
                    Skills
                </Link>
                <Link 
                    to="/projects" 
                    smooth={true} 
                    className={`${hrefClassName} cursor-pointer`}
                >
                    Projects
                </Link>
                <Link 
                    to="resume" 
                    smooth={true} 
                    className={`${hrefClassName} cursor-pointer`}
                >
                    Resume
                </Link>
            </div>
        </nav>
    )
}