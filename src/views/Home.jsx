import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/frontpage.jpeg";
import "../assets/css/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> CropDeal </h1>
        <p> Eat Healthy Live Healthy!</p>
        <Link to="/Login">
          <button> Login </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
