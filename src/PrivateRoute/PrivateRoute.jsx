import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  } else {
    return (
      <Navigate state={location.pathname} to="/login">
        {" "}
      </Navigate>
    );
  }
};

export default PrivateRoute;
