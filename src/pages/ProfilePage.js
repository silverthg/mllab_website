import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/use-auth";
import Navigation from "components/Navigation";

const ProfilePage = () => {
  const { currentUser, email } = useAuth();
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const [displayName, setDisplayName] = useState(currentUser.displayName || "");

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div className="container-center-horizontal">
      <div className="homepage">
        <Navigation />
        <div className="main-content">
          <div className="profile-form">
            <h1>{displayName ? `${displayName}` : "Имя пользователя"}</h1>
            <div className="avatar-container">
              <img src={photoURL} alt="Avatar" className="avatar" />
            </div>
            <div className="info-container">
              <div className="info-item">Телефон:</div>
            </div>
            <div className="info-container">
              <div className="info-item">Email: {email}</div>
            </div>
            <div className="info-container">
              <div className="info-item">
                <Link to="/edit-profile">
                  <button>Редактировать профиль</button>
                </Link>
              </div>
            </div>
            <div className="info-container">
              <div className="info-item">
                <h2>Загрузить статью</h2>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Многомасштабные модели пониженного порядка 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default ProfilePage;
