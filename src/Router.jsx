import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="diario" element={<App mode="Daily" />}></Route>
          <Route path="semanal" element={<App mode="Weekly" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
