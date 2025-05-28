import React from "react";

function Message({ text, sender, time }) {
  return (
    <div className={`message message-${sender} my-2`}>      
      <div className="p-2 rounded shadow-sm">
        <strong className="d-block">{sender === "user" ? "You" : "AI"}</strong>
        <span>{text}</span>
        <div className="text-muted small text-end">{time}</div>
      </div>
    </div>
  );
}

export default Message;