import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { Button, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Leo", message: "Hey hoo!!" },
    { username: "Leo", message: "Hey hoo!!" },
  ]);
  const [username, setUsername] = useState("");

  //useState = variables in REACT
  //useEffect = run code on a condition

  useEffect(() => {
    setUsername(prompt("Enter your name"));
    //run code
    //if [] is empty, this code run once when the app component loads
  }, []); //condition

  const sendMessage = (event) => {
    event.preventDefault();

    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };
  return (
    <div className='App'>
      <h1>Hey Modin</h1>
      <h3>Welcome {username}</h3>
      <form>
        <FormControl>
          <InputLabel>Enter your message ...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            type='submit'
            variant='contained'
            color='primary'
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
