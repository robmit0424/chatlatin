import React from "react";

function MessageOthers({ props }) {
  return (
    <div className="message-others">
      <p style={{ fontSize: "18px", fontWeight: 700, paddingBottom: "2px" }}>
        {props.sentBy}
      </p>
      <p>{props.message}</p>
      {/* <p style={{ fontSize: "12px", textAlign: "right", paddingTop: "12px" }}>
        {props.timeSent}
      </p> */}
    </div>
  );
}

export default MessageOthers;
