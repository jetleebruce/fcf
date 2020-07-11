import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //useState = variables in REACT
  //useEffect = run code on a condition

  useEffect(() => {
    setUsername(prompt("Enter your name"));
    //run code
    //if [] is empty, this code run once when the app component loads
  }, []); //condition

  useEffect(() => {
    //it will run once a component loads
    db.collection("messages")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className='App'>
      <h1>Hey Modin</h1>
      <img
        src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
        alt='facebook'
      />
      <h3>Welcome {username}</h3>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          {/* <InputLabel>Press Enter to Send</InputLabel> */}
          <Input
            className='app__input'
            placeholder='Enter a message'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className='app__iconButton'
            disabled={!input}
            type='submit'
            variant='contained'
            color='primary'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
