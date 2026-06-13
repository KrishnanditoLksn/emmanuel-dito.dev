import {Link} from "react-scroll";

export default function NavigationList({divClassName, navClassName, hrefClassName}) {
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