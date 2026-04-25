import React from "react";
import { Link } from "react-router-dom";
import "./PlatformPage.css";

function NotFound() {
  return (
    <section className="platform-page">
      <div className="platform-card">
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="homeBtn" to="/" style={{ marginTop: "1rem" }}>
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
