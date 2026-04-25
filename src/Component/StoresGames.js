import React from "react";
import LazyLoad from "react-lazy-load";
import "./StoresGames.css";
import gamesData from "../UnlockedGames.json";
import Footer from "./Footer";

function StoresGames() {
  const RenderGameCard = React.memo(function RenderGameCard(gameProduct) {
    return (
      <>
        <div className="card-hover">
          <div className="card-media">
            <LazyLoad height={220} offset={100}>
              <img loading="lazy" src={gameProduct.imgURL} alt={gameProduct.id} />
            </LazyLoad>
          </div>
          <div className="card-hover__content">
            <h3 className="card-hover__title">{gameProduct.name}</h3>
            <p className="card-meta">
              <span>Size</span>
              {gameProduct.size}
            </p>
            <p className="card-meta">
              <span>OS</span>
              {gameProduct.OS}
            </p>
            <p className="card-meta">
              <span>Processor</span>
              {gameProduct.Processor && gameProduct.Processor.length > 0
                ? gameProduct.Processor
                : "unknown"}
            </p>
            <p className="card-meta">
              <span>Memory</span>
              {gameProduct.Memory && gameProduct.Memory.length > 0
                ? gameProduct.Memory
                : "unknown"}
            </p>
            <p className="card-meta">
              <span>Graphics</span>
              {gameProduct.Graphics && gameProduct.Graphics.length > 0
                ? gameProduct.Graphics
                : "unknown"}
            </p>
            <p className="card-meta">
              <span>DirectX</span>
              {gameProduct.DirectX && gameProduct.DirectX.length > 0
                ? gameProduct.DirectX
                : "unknown"}
            </p>
            <p className="card-meta">
              <span>Hard Drive</span>
              {gameProduct["Hard Drive"] && gameProduct["Hard Drive"].length > 0
                ? gameProduct["Hard Drive"]
                : "unknown"}
            </p>
            <a
              className="downloadBtn"
              href={gameProduct.downloadLink}
            >
              Download
            </a>
          </div>
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

export default StoresGames;
