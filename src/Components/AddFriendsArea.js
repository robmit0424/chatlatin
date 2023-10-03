import { Button } from "@mui/material";
import React from "react";

function AddFriendsArea() {
  return (
    <div className="add-friends-container">
      <div className="add-friends-input-container">
        <input
          placeholder="Enter The Username You Are Looking For Here..."
          className="add-friends-input"
          style={{ marginLeft: "8px" }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#e75f86", mr: "8px", borderRadius: "20px" }}
        >
          Search
        </Button>
      </div>
      <div className="add-friends-list-container"></div>
    </div>
  );
}

export default AddFriendsArea;
