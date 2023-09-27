import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatSendArea from "./ChatSendArea";

function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="workArea-container">
        <ChatHeader />
        <ChatArea />
        <ChatSendArea />
      </div>
    </div>
  );
}

export default MainContainer;
