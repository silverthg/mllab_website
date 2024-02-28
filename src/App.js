import React from "react";
import Signup from "./components/SignUp";
import { AuthProvider } from "./context/use-auth.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ProfilePage from "pages/ProfilePage";
import EditProfilePage from "pages/EditProfilePage";
import SciencePage from "pages/SciencePage";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<UserHomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/science" element={<SciencePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
