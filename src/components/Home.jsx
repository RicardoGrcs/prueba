import React from "react";
import image from "../undraw_blogging_vpvv.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <span>Rapid Solution For Your Bussines</span>
        <button className="btn-main">GET STARTED</button>
      </div>
      <div className="image">
        <img src={image} alt="office bolgging"></img>
      </div>
    </div>
  );
};

export default Home;
