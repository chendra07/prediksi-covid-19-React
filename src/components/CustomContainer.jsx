import React from "react";
import "../styling/component/customContainer.styles.scss";

const CustomContainer = ({ children }) => {
  return <div className="custom_container">{children}</div>;
};

export default CustomContainer;
