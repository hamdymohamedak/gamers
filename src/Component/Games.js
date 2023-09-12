import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import "./Games.css";
import gamesData from "../games.json";
import Footer from "./Footer";
import format from "date-fns/format";

function Games() {
  const RenderGameCard = React.memo(function RenderGameCard(gameProduct) {
    return (
      <>
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">{gameProduct.title}</h3>
            <p className="card-hover__text">{gameProduct.short_description}</p>
            <p> {gameProduct.platform} </p>
            <p> Genre: {gameProduct.genre} </p>
            <p>Developers: {gameProduct.developer}</p>
            <a href="#" className="card-hover__link">
              <a
                style={{ color: "red" }}
                className="playNowBtn"
                href={gameProduct.game_url}
              >
                Play Now
              </a>
            </a>
          </div>
          <LazyLoad height={200} offset={100}>
            <img
              loading="lazy"
              src={gameProduct.thumbnail}
              alt={gameProduct.id}
            />
          </LazyLoad>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="parent">
        {gamesData.map((gameProduct) => (
          <RenderGameCard key={gameProduct.id} {...gameProduct} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Games;
