import React from "react";
import Signup from "./components/SignUp";
import { AuthProvider } from "./context/use-auth.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuestHomePage from "./pages/GuestHomePage";
import UserHomePage from "./pages/UserHomePage";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "components/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<GuestHomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <UserHomePage />
                </PrivateRoute>
              }
            /> */}
            <Route path="/dashboard" element={<UserHomePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
