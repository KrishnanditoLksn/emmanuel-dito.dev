"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationListProps {
    divClassName?: string;
    navClassName?: string;
    hrefClassName?: string;
}

export default function NavigationList({ divClassName, navClassName, hrefClassName }: NavigationListProps) {
    const pathname = usePathname();

    const links = [
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Resume", href: "/resume" },
    ];

    return (
        <nav className={navClassName}>
            <div className={divClassName}>
                {links.map((link) => (
                    <Link 
                        key={link.href}
                        href={link.href} 
                        className={`${hrefClassName} cursor-pointer ${pathname === link.href ? 'underline decoration-4 underline-offset-8 text-neo-blue' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}