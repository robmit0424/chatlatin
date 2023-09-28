import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function ChatSendArea() {
  return (
    <div className="chat-send-area">
      <input placeholder="Send Message" className="chat-box" />
      <IconButton>
        <SendIcon style={{ fill: "#e75f86" }} />
      </IconButton>
    </div>
  );
}

export default ChatSendArea;
