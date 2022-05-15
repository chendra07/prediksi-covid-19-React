import React, { useState, useEffect } from "react";
import { Link, Outlet, Routes, Route, useNavigate } from "react-router-dom";
import CustomFooter from "../../components/CustomFooter";
import CustomHeader from "../../components/CustomHeader";
import "../../styling/mainTemplate.styles.scss";

const MainTemplate = () => {
  document.body.style = "background: white;";
  const navigate = useNavigate();
  return (
    <div className="template_container">
      <CustomHeader
        title={"Website Prediksi-Covid-19"}
        buttonTitle={"About"}
        onClick={() => {
          navigate("About");
        }}
      />
      <Outlet />
      <CustomFooter />
    </div>
  );
};

export default MainTemplate;
