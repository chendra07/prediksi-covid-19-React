import React from "react";
import { Link, Outlet, Routes, Route, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

import "../../styling/pageNotFound.styles.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page_not_found_container">
      <h1>404 - Page Not Found</h1>
      <div className="image_container">
        <img src="assets/image/ufo.png" alt="page_not_found" />
      </div>
      <CustomButton
        size={"big"}
        onClick={() => {
          navigate("Home");
        }}
      >
        Return to Home
      </CustomButton>
    </div>
  );
};

export default PageNotFound;
