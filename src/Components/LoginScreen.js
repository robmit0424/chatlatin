import React from "react";
import FullLogo from "./assets/ChatLatin-Full.png";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();
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
            <Button
              variant="contained"
              onClick={() => navigate("/app/welcome")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
