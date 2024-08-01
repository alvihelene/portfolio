import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.scss";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <div className="nav-wrap">
        <div className="left">
        <ScrollLink to="home" smooth={true} duration={500}>
            Alvi Møller
          </ScrollLink>
        </div>
        <div className={`right ${isActive ? "active" : ""}`}>
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
          className={`burger-menu ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="burger-icon"></div>
          <div className="burger-menu-items">
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
