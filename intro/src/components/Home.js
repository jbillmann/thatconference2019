import React from "react";
import Splash from "./Splash";
import People from "./People";

const Home = () => {
  return (
    <div className="App">
      <Splash>
        <People />
      </Splash>
    </div>
  );
};

export default Home;
