import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { format } from "date-fns";
import logoWithoutBg from "../img/logos/LogoWithoutBg.svg";

function NavBar() {
  const [formattedTime, setFormattedTime] = useState(() =>
    format(new Date(), "hh:mm:ss a")
  );
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const newFormattedTime = format(currentTime, "hh:mm:ss a");
      setFormattedTime(newFormattedTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <nav className={showNav ? "navbar responsive" : "navbar"}>
      <div>
        <h1 className="clock">{formattedTime}</h1>
      </div>
      <div>
        <img className="logo" src={logoWithoutBg} alt="logo" />
      </div>
      <div className={showNav ? "nav-links show" : "nav-links"}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setShowNav(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" onClick={() => setShowNav(false)}>
              Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setShowNav(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        className={`burger ${showNav ? "open" : ""}`}
        onClick={toggleNav}
        aria-label={showNav ? "Close menu" : "Open menu"}
        aria-expanded={showNav}
        type="button"
      >
        <div className={showNav ? "bar open" : "bar"}></div>
        <div className={showNav ? "bar open" : "bar"}></div>
        <div className={showNav ? "bar open" : "bar"}></div>
      </button>
    </nav>
  );
}

export default NavBar;
