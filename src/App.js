import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hello", "whats up", "here i am"]);
  console.log(input);
  console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();

    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className='App'>
      <h1>Hey Modin</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
