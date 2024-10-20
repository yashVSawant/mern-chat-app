import React from "react";

const Message = ({ message }) => {
  const isMyText = message.user.name === "yash";
  return (
    <div
      className="message"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: isMyText ? "flex-end" : "flext-start",
      }}
    >
      <div
        style={{
          width: "fit-content",
          margin: "5px",
          padding: "3px",
          backgroundColor: "green",
          borderRadius: "3px",
          color: "white",
        }}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Message;
