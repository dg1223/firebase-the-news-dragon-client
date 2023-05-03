import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("user in private route", user);

  if (loading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }
  // if there's user, go to whichever children
  // the user was last seen at
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;

/**
 * -------------------
 *      STEPS
 * -------------------
 * 1. Check user is logged in or not
 * 2. If user is logged in, then allow them to visit the route (pass children as props)
 * 3. Else redirect the user to the login page
 * 4. Set up the private router
 * 5. Handle loading
 */
