import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function ChatSendArea() {
  return (
    <div className="chat-send-area">
      <input placeholder="Search" className="chat-box" />
      <IconButton>
        <SendIcon />
      </IconButton>
    </div>
  );
}

export default ChatSendArea;
