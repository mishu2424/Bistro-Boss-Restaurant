import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) return <p>Loading...</p>;
  if (user && isAdmin) return children;
  return (
    <Navigate
      to={`/`}
      state={location?.pathname && location.pathname} 
      replace
    ></Navigate>
  );
};

export default AdminRoute;
