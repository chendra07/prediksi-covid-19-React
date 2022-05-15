import React, { useState, useEffect, useRef } from "react";
import { init } from "ityped";
import { Link, Outlet, useNavigate } from "react-router-dom";

import "../styling/landingPage.styles.scss";
import CustomButton from "../components/CustomButton";

const LandingPage = () => {
  const textRef = useRef();
  const navigate = useNavigate();
  document.body.style = "background: #EF476F;";

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      strings: [
        "Website Prediksi Covid-19",
        "Menggunakan LSTM",
        "by Chendra Dewangga",
        "Universitas Multimedia Nusantara",
      ],
    });
  }, []);

  return (
    <div className="landing_page">
      <div className="background_transparent">
        <div className="background_solid">
          <div className="landing_container">
            <div className="image_container">
              <img src="assets/image/covid_landing.png" alt="covid_image" />
            </div>
            <div className="text_container">
              <div className="landing_title">
                <span ref={textRef}></span>
              </div>
              <div className="button_container">
                <CustomButton
                  onClick={() => {
                    navigate("home");
                  }}
                  size={"big"}
                >
                  Getting Started
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
