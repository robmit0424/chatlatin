import React from "react";
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatSendArea from "./ChatSendArea";

function ChatScreen() {
  return (
    <div className="workArea-container">
      <ChatHeader />
      <ChatArea />
      <ChatSendArea />
    </div>
  );
}

export default ChatScreen;
