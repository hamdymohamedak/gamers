import React from "react";
import LazyLoad from "react-lazy-load";
import "./Games.css";
import gamesData from "../games.json";
import Footer from "./Footer";

function GameCard({
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
      <div className="card-media">
        <LazyLoad height={220} offset={100}>
          <img loading="lazy" src={thumbnail} alt={title} />
        </LazyLoad>
      </div>
      <div className="card-hover__content">
        <h3 className="card-hover__title">{title}</h3>
        <p className="card-hover__text">{short_description}</p>
        <p className="card-meta">
          <span>Platform</span>
          {platform}
        </p>
        <p className="card-meta">
          <span>Genre</span>
          {genre}
        </p>
        <p className="card-meta">
          <span>Developer</span>
          {developer}
        </p>
        <a href={game_url} className="playNowBtn">
          Play Now
        </a>
      </div>
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
