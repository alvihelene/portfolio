import { Link } from "react-router-dom"
import "./Navbar.scss"

export default function Navbar(){

    const navLinks = [
        { to: "/", label: "Alvi Møller" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/about", label: "Om" },
        { to: "/contact", label: "Kontakt" },
    ];

    return (
        <nav>
            <div className="nav-wrap">
            {navLinks.map((link, index) => (
                    <Link key={index} to={link.to}>{link.label}</Link>
                ))}
            </div>
        </nav>
    );
}