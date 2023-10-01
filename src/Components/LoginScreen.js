import React from "react";
import FullLogo from "./assets/ChatLatin-Full.png";
import { Button, TextField, Typography } from "@mui/material";

function LoginScreen() {
  return (
    <div className="login-screen-container">
      <div className="login-screen-directions">
        <img src={FullLogo} alt="Full Logo" style={{ width: "80%" }} />
      </div>
      <div className="login-screen-form-container">
        <div className="login-screen-form">
          <Typography
            sx={{ color: "white", fontWeight: "600", fontSize: "32px" }}
          >
            Login
          </Typography>
          <TextField
            placeholder="Username"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
          <TextField
            placeholder="Password"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
          <div className="login-form-buttons">
            <Button variant="contained">Sign Up</Button>
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
