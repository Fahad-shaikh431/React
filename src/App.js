import React from "react";
import ChatBox from "./ChatBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="app-wrapper bg-light text-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">AI Chat (Offline Mode)</span>
        </div>
      </nav>
      <div className="container py-4">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;