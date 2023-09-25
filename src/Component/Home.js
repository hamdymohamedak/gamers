import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";
import homeImg from "../img/one.jpg";
import AskanderName from "./AskanderTitle"

function Home() {
  useEffect(() => {
    const setTextAnimation = (
      delay,
      duration,
      strokeWidth,
      timingFunction,
      strokeColor,
      repeat
    ) => {
      const paths = document.querySelectorAll("path");
      const mode = repeat ? "infinite" : "forwards";

      paths.forEach((path, i) => {
        const length = path.getTotalLength();
        Object.assign(path.style, {
          "stroke-dashoffset": `${length}px`,
          "stroke-dasharray": `${length}px`,
          "stroke-width": `${strokeWidth}px`,
          stroke: strokeColor,
          animation: `${duration}s svg-text-anim ${mode} ${timingFunction}`,
          "animation-delay": `${i * delay}s`,
        });
      });
    };

    setTextAnimation(0.1, 2.8, 2, "ease-in", "#2f2c3a", true);
  }, []);

  return (
    <>
      <a style={{ zIndex: "1000" }} href="tel:201278859768" className="fixedBtn">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <section className="HomeSec">
        <div className="lines">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
            <AskanderName/>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[
              { text: "Let's play", interval: 10000 },
              { text: "Games", interval: 2000 },
              { text: "Go To Games", interval: null },
            ].map((item, index) => (
              <div
                key={index}
                className={`carousel-item${index === 0 ? " active" : ""}`}
                data-bs-interval={item.interval}
              >
                <Link to={"/storesgames"} className="homeBtn">
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="popParent">
          {[
            { id: "android", icon: "fa-android" },
            { id: "ps", icon: "fa-playstation" },
            { id: "xbox", icon: "fa-xbox" },
            { id: "iphone", icon: "fa-app-store-ios" },
          ].map((item) => (
            <Link key={item.id} to={`/${item.id}`} className={`pop ${item.id}`}>
              <i className={`fa-brands ${item.icon}`}></i>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
