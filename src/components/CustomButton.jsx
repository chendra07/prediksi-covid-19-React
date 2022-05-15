import React from "react";
import "../styling/component/customButton.styles.scss";

const CustomButton = ({ children, onClick, size }) => {
  return (
    <button
      onClick={onClick}
      className={size == "big" ? "custom_button_big" : "custom_button_small"}
    >
      {children}
    </button>
  );
};

export default CustomButton;
