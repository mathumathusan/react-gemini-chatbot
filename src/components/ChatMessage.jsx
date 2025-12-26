import React from "react";
import ChatvotIcon from "./ChatvotIcon";

const ChatMessage = ({ message }) => {
  return (
    <div className={`message ${message.role==="model"?'bot':'user'}-message`}>
        {message.role==="model" && <ChatvotIcon size={40} color="#000000" />}
      <div className="message-text">
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
