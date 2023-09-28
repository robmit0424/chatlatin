import React, { useState } from "react";
import FullLogo from "./assets/ChatLatin-Full.png";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";

function ChatArea() {
  const [allMessages, setAllMessages] = useState([
    { sentBy: "Eric", message: "Yo", timeSent: "11:00" },
    { sentBy: "me", message: "Whats up?", timeSent: "11:00" },
    { sentBy: "Eric", message: "Fuck you", timeSent: "11:01" },
    { sentBy: "Eric", message: "Yo", timeSent: "11:00" },
    { sentBy: "me", message: "Whats up?", timeSent: "11:00" },
    { sentBy: "Eric", message: "Fuck you", timeSent: "11:01" },
    { sentBy: "Eric", message: "Yo", timeSent: "11:00" },
    { sentBy: "me", message: "Whats up?", timeSent: "11:00" },
    { sentBy: "Eric", message: "Fuck you", timeSent: "11:01" },
  ]);
  return (
    <div className="chat-area">
      {!allMessages.length ? (
        <img className="fullLogo" src={FullLogo} alt="Logo" />
      ) : (
        allMessages.map((message) => {
          return message.sentBy === "me" ? (
            <MessageSelf message={message.message} />
          ) : (
            <MessageOthers props={message} />
          );
        })
      )}
    </div>
  );
}

export default ChatArea;
