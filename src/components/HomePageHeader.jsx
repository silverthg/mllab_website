import React from "react";
import image2 from "../img/2.jpg";
import "../styles/homepage.css";

const HomePageHeader = () => {
  return (
    <div
      className="overlap-group2"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <p className="title">
        Вычислительные технологии моделирования многофизичных и многомасштабных
        процессов криолитозоны
      </p>
      <p className="title">Молодежная лаборатория</p>
    </div>
  );
};

export default HomePageHeader;
