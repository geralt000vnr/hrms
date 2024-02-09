import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

function PrivateRoutes({ path, Component }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    console.log("jshkdjf", userDetails);
    // dispatch()
  }, []);

  return <Route path={path} element={<Component />} />;
}

export default PrivateRoutes;
