import React from "react";
import FullLogo from "./assets/ChatLatin-Full.png";

function Welcome() {
  return (
    <div className="welcome-container">
      <img className="fullLogo" src={FullLogo} alt="Logo" />
    </div>
  );
}

export default Welcome;
