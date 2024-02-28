import React from "react";
import image3 from "../img/3.png";
import "../styles/homepage.css";

const HomePageProblem = () => {
  return (
    <div
      className="overlap-group"
      style={{ backgroundImage: `url(${image3})` }}
    >
      <h2 className="raleway-extra-bold-white-36px">Проблема</h2>
    </div>
  );
};

export default HomePageProblem;
