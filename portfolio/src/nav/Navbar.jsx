import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.scss";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const navLinks = [
        { to: "/", label: "Alvi Møller" },
        { to: "portfolio", label: "Portfolio" },
        { to: "/about", label: "Om" },
        { to: "/contact", label: "Kontakt" },
    ];

    return (
        <nav>
            <div className="nav-wrap">
                <div className="left">
                    <Link to="/">{navLinks[0].label}</Link>
                </div>
                <div className={`right ${isActive ? "active" : ""}`}>
                {!isActive && (
                        <>
                            <ScrollLink to="portfolio" smooth={true} duration={500}>
                                Portfolio
                            </ScrollLink>
                            {navLinks.slice(2).map((link, index) => (
                                <Link key={index} to={link.to}>
                                    {link.label}
                                </Link>
                            ))}
                        </>
                    )}
                </div>
                <div
                    className={`burger-menu ${isActive ? "active" : ""}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <div className="burger-icon"></div>
                    <div className="burger-menu-items">
                        {isActive && (
                            <>
                                {navLinks.slice(1).map((link, index) => (
                                    <Link key={index} to={link.to}>
                                        {link.label}
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
