import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/use-auth";
import { Button } from "react-bootstrap";
import image1 from "../img/1.png";
import "../styles/homepage.css";

const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const [displayName, setDisplayName] = useState(
    currentUser?.displayName || ""
  );
  const [error, setError] = useState("");
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

  let nameParts = displayName.split(" ");
  let lastName = nameParts.pop();
  let initials = nameParts
    .map((name) => name.charAt(0).toUpperCase() + ".")
    .join("");
  let lastNameWithInitials = lastName + " " + initials;

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a className="navbar-brand" href="/">
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
                  Документы
                </a>
              </li>
              <li className="nav-item">
                <a href="/science" className="nav-link">
                  Наука
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mr-10">
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <a href="/profile" className="nav-link">
                      {lastNameWithInitials}
                    </a>
                  </li>
                  <li className="nav-item me-auto">
                    <Button
                      className="nav-link"
                      variant="link"
                      onClick={handleLogout}
                    >
                      Выйти
                    </Button>
                  </li>
                </>
              ) : (
                <li className="nav-item me-auto">
                  <a href="/login" className="nav-link">
                    Вход
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
