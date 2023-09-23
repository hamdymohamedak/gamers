import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { format } from "date-fns";
import logoWithoutBg from "../img/logos/LogoWithoutBg.svg";

function NavBar() {
  const [formattedTime, setFormattedTime] = useState("");
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
    setShowNav(!showNav);
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={toggleNav}>
        <div className={showNav ? "bar open" : "bar"}></div>
        <div className={showNav ? "bar open" : "bar"}></div>
        <div className={showNav ? "bar open" : "bar"}></div>
      </div>
    </nav>
  );
}

export default NavBar;
