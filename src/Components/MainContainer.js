import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
