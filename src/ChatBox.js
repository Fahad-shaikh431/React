import React, { useState } from "react";
import Message from "./Message";
import responses from "./data/responses";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotReply = (text) => {
    const lower = text.toLowerCase();
    for (const keyword in responses) {
      if (lower.includes(keyword)) return responses[keyword];
    }
    return "I'm not sure how to respond to that yet.";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user", time: new Date().toLocaleTimeString() };
    const botReply = {
      text: getBotReply(input),
      sender: "bot",
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage, botReply]);
    setInput("");
  };

  return (
    <div className="card shadow-lg p-4 chat-container">
      <div className="chat-window mb-3">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} sender={msg.sender} time={msg.time} />
        ))}
      </div>
      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
