import React from "react";
import "./styles.css";
import FullLogo from "./assets/ChatLatin-Full.png";

function WorkArea() {
  return (
    <div className="workArea-container">
      <img className="fullLogo" src={FullLogo} alt="Logo" />
    </div>
  );
}

export default WorkArea;
