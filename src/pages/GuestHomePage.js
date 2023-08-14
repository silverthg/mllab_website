import React, { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useAuth } from "context/use-auth";
import image1 from "../img/1.png";
import image2 from "../img/2.png";
import image3 from "../img/3.png";
import image4 from "../img/4.png";
import "../styles/homepage1.css";
import { Button } from "react-bootstrap";

const GuestHomePage = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="container-center-horizontal">
      <div className="homepage">
        <div className="navbar">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a className="navbar-brand" href="#">
                <img className="navbar-brand" src={image1} alt="logo" />
              </a>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Главная
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      О лаборатории
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Достижения
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Статьи
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Фотогалерея
                    </a>
                  </li>
                  {currentUser ? (
                    <li className="nav-item">
                      <Button
                        className="nav-link"
                        variant="link"
                        onClick={handleLogout}
                      >
                        Выйти
                      </Button>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Вход
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="main-content">
          <div
            className="overlap-group2"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
          <div className="overlap-group4">
            <h2>О лаборатории</h2>
            <hr className="line-2" />
            <p className="text-1">
              Проект направлен на создание в СВФУ конкурентоспособной на
              международном уровне научно-исследовательской лаборатории по
              многомасштабному моделирования и многомасштабным моделям
              пониженного порядка.
            </p>
          </div>
          <div
            className="overlap-group"
            style={{ backgroundImage: `url(${image3})` }}
          >
            <h2 className="raleway-extra-bold-white-36px">Проблема</h2>
          </div>
          <div className="overlap-group5">
            <h2>Цели лаборатории</h2>
            <hr className="line-2" />
            <p className="text-2">
              Проект направлен на создание в СВФУ конкурентоспособной на
              международном уровне научно-исследовательской лаборатории по
              многомасштабному моделирования и многомасштабным моделям
              пониженного порядка.
            </p>
          </div>
          <div
            className="overlap-group"
            style={{ backgroundImage: `url(${image4})` }}
          >
            <h2 className="raleway-extra-bold-white-36px">Достижения</h2>
            <span></span>
          </div>
        </div>
        <footer>
          <p>Многомасштабные модели пониженного порядка 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default GuestHomePage;
