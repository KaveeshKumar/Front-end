import React from "react";
import Farmers from "../assets/images/about.jpg";
import "../assets/css/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Farmers})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Crop Deal Website leads to perform   Management of Users(Farmers and Dealers) details where Farmer can view, create, and update any information about available Crops input the location/address and Dealers can view and purchase the available Crop.
        We drive agricultural transactions through our digital platform in combination with our service partnership network. Agri Marketplace accommodates online payments between buyer and seller, product quality check options, and end-to-end logistic services.

        This site does not buy or sell crops and is not a broker. Instead, we offer you the ability to effortlessly market your crop via our platform.



        </p>
      </div>
    </div>
  );
}

export default About;
