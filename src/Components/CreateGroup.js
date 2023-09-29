import { Button, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import React from "react";

function CreateGroup() {
  return (
    <div className="create-group-container">
      <div className="create-group-input-container">
        <input
          placeholder="Group Name"
          className="create-group-input"
          style={{ marginLeft: "8px" }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#e75f86", mr: "8px", borderRadius: "20px" }}
        >
          Create
        </Button>
      </div>
      <div className="create-group-input-container">
        <IconButton>
          <SearchOutlinedIcon style={{ fill: "#e75f86" }} />
        </IconButton>
        <input
          placeholder="Search For Friends To Add"
          className="create-group-input"
        />
      </div>
      <div className="find-group-contact-container"></div>
    </div>
  );
}

export default CreateGroup;
