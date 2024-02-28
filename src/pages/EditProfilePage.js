import React, { useState, useRef } from "react";
import { useAuth } from "context/use-auth";
import { useNavigate } from "react-router-dom";
import "../styles/homepage.css";
import Navigation from "components/Navigation";
import { upload } from "../firebase";

const EditProfilePage = () => {
  const { currentUser, updateEmail } = useAuth();
  const [email, setEmail] = useState(currentUser.email);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();
  const [error, setError] = useState("");

  async function handleUpdateProfile(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const promises = [updateEmail(email)];

      if (fileRef.current.files[0]) {
        promises.push(
          upload(fileRef.current.files[0], currentUser, setLoading)
        );
      }

      await Promise.all(promises);

      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-center-horizontal">
      <div className="homepage">
        <Navigation />
        <div className="main-content">
          <div className="profile-form">
            <h1>Редактирование профиля</h1>
            <form onSubmit={handleUpdateProfile}>
              <div className="info-container">
                <label className="edit-profile-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="info-container">
                <label className="edit-profile-label" htmlFor="avatar">
                  Аватар
                </label>
                <input type="file" id="avatar" ref={fileRef} />
              </div>
              <button type="submit">Сохранить</button>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
        <footer>
          <p>Многомасштабные модели пониженного порядка 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default EditProfilePage;
