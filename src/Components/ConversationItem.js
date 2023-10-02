import React from "react";
import "./styles.css";
import logo from "./assets/ChatLatin-Icon.png";
import { useNavigate } from "react-router-dom";

function ConversationItem({ props }) {
  const navigate = useNavigate();
  return (
    <div
      className="conversation-item"
      onClick={() => navigate("/app/chat")}
      key={props.UUID}
    >
      <img className="conversation-image" src={logo} alt="pig" />
      <div className="conversation-info">
        <div className="conversation-name">{props.name}</div>
        <div>{props.lastMessage}</div>
      </div>
      <div className="conversation-timeStamp">{props.timeStamp}</div>
    </div>
  );
}

export default ConversationItem;
