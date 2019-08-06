import React from "react";
import LoadStars from "../utils/LoadStars";

const Splash = ({ children }) => {
  LoadStars();

  return (
    <React.Fragment>
      <section className="intro">
        A long time ago, in a galaxy far, far away....
      </section>
      <section className="logo">
        <img src="/logo.svg" alt="logo" />
      </section>
      <div id="board">
        <div id="content">
          <p id="title">THAT Conference Episode 2019</p>
          <p id="subtitle">
            Using the Apollo GraphQL Client to Break on Through to the REST API
          </p>
          {children}
        </div>
      </div>
      <iframe
        src="/star_wars_crawl.mp3"
        allow="autoplay"
        id="audio"
        style={{ display: "none" }}
        title="autoplay"
      />
      <audio preload="auto" autoPlay>
        <source src="/star_wars_crawl.mp3" type="audio/mpeg" />
      </audio>
    </React.Fragment>
  );
};

export default Splash;
