import React, { useEffect, useState } from "react";
import "./Contact.css";
function Contact() {
  useEffect(() => {
    const button = document.querySelector(".menu__button");
    const menu = document.querySelector(".menu__body");
    const close = document.querySelector(".menu__header button");
    const overlay = document.querySelector(".menu__overlay");

    function showMenu() {
      button.setAttribute("hidden", "");
      menu.removeAttribute("hidden");
      overlay.removeAttribute("hidden");
    }

    function hideMenu() {
      menu.setAttribute("hidden", "");
      overlay.setAttribute("hidden", "");
      button.removeAttribute("hidden");
    }

    button.addEventListener("click", showMenu);
    close.addEventListener("click", hideMenu);
    overlay.addEventListener("click", hideMenu);
  });
  //   useState events

  let [mobileContent, setMobileContent] = useState("Askander");
  let [iconsViewFromHidden, setIconsViewFromHidden] = useState({
    display: "none",
  });
  let handleViewMyNumber = () => {
    setMobileContent("+20 1278 8597 68");
  };

  let handleEmail = () => {
    setMobileContent("mohameddhamdy407@gmail.com");
  };

  let otherIconsHandle = () => {
    setIconsViewFromHidden({ display: "flex" });
  };
  //   social Media windows Open
  let handleFacebook = () => {
    window.open("https://www.facebook.com/hamdy.elgokar.5");
  };
  let handleGitHub = () => {
    window.open("https://github.com/hamdymohamedak");
  };
  let handleTelegram = () => {
    window.open("https://t.me/Askander");
  };
  return (
    <section className="contactParent">
      <div className="hero__wrapper">
        <h1 className="hero__header"></h1>
        <div className="hero__phone">
          <button tton className="menu__button">
            <div>
              <div />
            </div>
            Social Media
          </button>
          <section className="menu__body" hidden="hidden">
            <div className="menu__header">
              <label>
                <div />
              </label>
              <p>social Media</p>
              <button title="Close">
                <div />
              </button>
            </div>
            <div className="menu__contact">
              <a onClick={handleViewMyNumber} href="tel:+201278859768">
                <svg
                  onClick={handleViewMyNumber}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path
                    onClick={handleViewMyNumber}
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path
                    onClick={handleViewMyNumber}
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
                <span onClick={handleViewMyNumber}>Call</span>
              </a>
              <a
                onClick={handleEmail}
                href="https://mohameddhamdy407@gmail.com"
              >
                <svg
                  onClick={handleEmail}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span onClick={handleEmail}>Email</span>
              </a>
              <a onClick={otherIconsHandle} href="#0">
                <svg
                  onClick={handleEmail}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path
                    onClick={otherIconsHandle}
                    d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"
                  />
                  <path onClick={handleEmail} d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span onClick={otherIconsHandle}>Others</span>
              </a>
            </div>
            {mobileContent} {/*Defult = Askander*/}
            <div style={iconsViewFromHidden} className="socialMediaOthers">
              <i onClick={handleFacebook} class="fa-brands fa-facebook"></i>
              <i onClick={handleGitHub} class="fa-brands fa-github"></i>
              <i onClick={handleTelegram} class="fa-brands fa-telegram"></i>
            </div>
          </section>
          <div className="menu__overlay" hidden="hidden" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
