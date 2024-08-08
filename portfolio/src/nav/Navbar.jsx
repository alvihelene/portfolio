import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.scss";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__wrap">
        <div className="navbar__left">
          <ScrollLink to="home" smooth={true} duration={500}>
            Alvi Møller
          </ScrollLink>
        </div>
        <div className={`navbar__right ${isActive ? "navbar__right--active" : ""}`}>
          {!isActive && (
            <>
              <ScrollLink to="portfolio" smooth={true} duration={500}>
                Portfolio
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500}>
                Om
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Kontakt
              </ScrollLink>
            </>
          )}
        </div>
        <div
          className={`navbar__burger-menu ${isActive ? "navbar__burger-menu--active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="navbar__burger-icon"></div>
          <div className="navbar__burger-menu-items">
            {isActive && (
              <>
                <ScrollLink to="portfolio" smooth={true} duration={500}>
                  Portfolio
                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500}>
                  Om
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Kontakt
                </ScrollLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
