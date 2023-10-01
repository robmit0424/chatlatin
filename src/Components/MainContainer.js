import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatSendArea from "./ChatSendArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import LoginScreen from "./LoginScreen";

function MainContainer() {
  return (
    <div className="main-container">
      {/* <LoginScreen /> */}
      <Sidebar />
      {/* <div className="workArea-container">
        <ChatHeader />
        <ChatArea />
        <ChatSendArea />
      </div> */}
      <Welcome />
      {/* <CreateGroup /> */}
    </div>
  );
}

export default MainContainer;
