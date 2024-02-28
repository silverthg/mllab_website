import React, { useState, useEffect } from "react";
import "../styles/homepage.css";

const HomePageAboutLab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="overlap-group4">
      <h2 className={`lab-title ${visible ? "fade-in" : ""}`}>О лаборатории</h2>
      <hr className={`line-2 ${visible ? "fade-in" : ""}`} />
      <div className="about-container">
        <p
          className={`about-container-item text-1 ${visible ? "fade-in" : ""}`}
        >
          Цель - Проведение современных проблемно-ориентированных
          фундаментальных научных исследований по вычислительным технологиям для
          их применения при научно-техническом сопровождении технологических
          проектов научно-образовательного центра на основе методов
          компьютерного моделирования, вычислительной математики и машинного
          обучения.
        </p>
        <p
          className={`about-container-item text-1 ${visible ? "fade-in" : ""}`}
        >
          Направления исследований: 1.Многомасштабные прикладные математические
          модели; 2.Технологии машинного обучения и искусственного интеллекта;
          3.Вычислительные технологии математического моделирования;
          4.Разработка прикладного программного обеспечения.
        </p>
      </div>
    </div>
  );
};

export default HomePageAboutLab;
