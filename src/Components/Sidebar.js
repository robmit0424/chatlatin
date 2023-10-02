import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./styles.css";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [conversations, setConversations] = useState([
    {
      UUID: 1,
      name: "Jake",
      lastMessage: "WTF Bro?!?!?!",
      timeStamp: "Today",
    },
    {
      UUID: 2,
      name: "Eric",
      lastMessage: "Fuck you",
      timeStamp: "Yesterday",
    },
    {
      UUID: 3,
      name: "Zack",
      lastMessage: "*1 image attached*",
      timeStamp: "2 days ago",
    },
  ]);

  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleOutlinedIcon style={{ fill: "#e75f86" }} />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAlt1OutlinedIcon style={{ fill: "#e75f86" }} />
          </IconButton>
          <IconButton>
            <GroupAddOutlinedIcon
              onClick={() => navigate("/app/groups")}
              style={{ fill: "#e75f86" }}
            />
          </IconButton>
          <IconButton>
            <AddCircleOutlineOutlinedIcon style={{ fill: "#e75f86" }} />
          </IconButton>
          <IconButton>
            <DarkModeOutlinedIcon style={{ fill: "#e75f86" }} />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchOutlinedIcon style={{ fill: "#e75f86" }} />
        </IconButton>
        <input placeholder="Search" className="searchBox" />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
