import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { format } from "date-fns";
import logoWithoutBg from "../img/logos/LogoWithoutBg.svg";
function NavBar() {
  const [formattedTime, setFormattedTime] = useState("");

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
  return (
    <ul>
      <div>
        <h1 className="clock">{formattedTime}</h1>
      </div>
      <div>
        <img className="logo" src={logoWithoutBg} alt="logo" />
      </div>
      <div className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
    </ul>
  );
}

export default NavBar;
