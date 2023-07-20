import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/dia" element={<App />}></Route>
          <Route path="/semanal" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
