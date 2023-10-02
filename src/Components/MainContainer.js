import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatSendArea from "./ChatSendArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import LoginScreen from "./LoginScreen";
import { Outlet, Route, Routes } from "react-router-dom";
import ChatScreen from "./ChatScreen";

function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
