import React from "react";
import Users from "./Users";
import Header from "./Header";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Users />
      </div>
    </React.Fragment>
  );
};

export default Home;
