import React, { useState } from "react";
import Message from "./Message";
import { Button } from "react-bootstrap";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "hello", user: { name: "yash" } },
    { text: "hii", user: { name: "kajal" } },
    { text: "how are you", user: { name: "yash" } },
  ]);

  const [text, setText] = useState("");
  const sendMessageHandler = () => {
    console.log(text);
    const newMessage = { text: text, user: { name: "yash" } };
    setMessages([...messages, newMessage]);
    setText("");
  };
  return (
    <div
      style={{
        width: "60vw",
        height: "83vh",
        margin: "10px",
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "77vh",
          width: "95%",
          paddingInline: "20px",
          backgroundColor: "white",
          margin: "5px",
          overflowY: "auto",
        }}
      >
        {messages.map((m) => (
          <Message key={m.text} message={m} />
        ))}
      </div>
      <div style={{ margin: "5px", display: "flex" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
};

export default ChatBox;
