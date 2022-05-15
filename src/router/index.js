import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { About, HomePage, LandingPage, Dummy } from "../pages";
import { MainTemplate, PageNotFound } from "../pages/Templates";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<MainTemplate />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouterConfig;
