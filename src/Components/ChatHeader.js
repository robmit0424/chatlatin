import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from "./assets/ChatLatin-Icon.png";
import { IconButton } from "@mui/material";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-identity">
        <img className="chat-header-image" src={logo} alt="pig" />
        <p className="chat-header-name">Eric</p>
      </div>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default ChatHeader;
