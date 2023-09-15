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
          <div className="card-hover__content">
            <h3 className="card-hover__title">{gameProduct.name}</h3>
            <h2 className="card-hover__text">
              Size:
              <span style={{ color: "black", fontWeight: "bold" }}>
                {gameProduct.size}
              </span>
            </h2>
            <p>OS: {gameProduct.OS}</p>
            <p>
              Processor:
              {gameProduct.Processor && gameProduct.Processor.length > 0
                ? gameProduct.Processor
                : "unknown"}
            </p>
            <p>
              Memory:
              {gameProduct.Memory && gameProduct.Memory.length > 0
                ? gameProduct.Memory
                : "unknown"}
            </p>
            <p>
              Graphics:
              {gameProduct.Graphics && gameProduct.Graphics.length > 0
                ? gameProduct.Graphics
                : "unknown"}
            </p>
            <p>
              DirectX:
              {gameProduct.DirectX && gameProduct.DirectX.length > 0
                ? gameProduct.DirectX
                : "unknown"}
            </p>
            <p>
              Hard Drive:
              {gameProduct["Hard Drive"] && gameProduct["Hard Drive"].length > 0
                ? gameProduct["Hard Drive"]
                : "unknown"}
            </p>
            <a
              className="downloadBtn"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.1rem" }}
              href={gameProduct.downloadLink}
            >
              Download
            </a>
            <a href="#" className="card-hover__link"></a>
          </div>
          <LazyLoad height={200} offset={100}>
            <img loading="lazy" src={gameProduct.imgURL} alt={gameProduct.id} />
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

export default StoresGames;
