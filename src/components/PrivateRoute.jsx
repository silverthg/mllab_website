import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/use-auth";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
