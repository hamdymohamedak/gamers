import React from "react";
import LazyLoad from "react-lazy-load";
import "./Games.css";
import gamesData from "../games.json";
import Footer from "./Footer";

function GameCard({
  id,
  title,
  short_description,
  platform,
  genre,
  developer,
  game_url,
  thumbnail,
}) {
  return (
    <div className="card-hover">
      <div className="card-hover__content">
        <h3 className="card-hover__title">{title}</h3>
        <p className="card-hover__text">{short_description}</p>
        <p>{platform}</p>
        <p>Genre: {genre}</p>
        <p>Developers: {developer}</p>
        <a href={game_url} style={{ color: "red" }} className="playNowBtn">
          Play Now
        </a>
      </div>
      <LazyLoad height={200} offset={100}>
        <img loading="lazy" src={thumbnail} alt={title} />
      </LazyLoad>
    </div>
  );
}

function Games() {
  return (
    <div className="parent">
      {gamesData.map((gameProduct) => (
        <GameCard key={gameProduct.id} {...gameProduct} />
      ))}
      <Footer />
    </div>
  );
}

export default Games;
