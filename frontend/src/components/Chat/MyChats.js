import React from "react";
import Users from "../Search/Users";

const MyChats = () => {
  const dummay = [
    {
      name: "yash",
      email: "yash@gmail.com",
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      name: "kajal",
      email: "kajal@gmail.com",
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      name: "nikhil",
      email: "nikhil@gmail.com",
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
  ];

  const clickHandler = (id) => {
    console.log(id);
  };
  return (
    <div
      style={{
        width: "38vw",
        height: "83vh",
        margin: "10px",
        backgroundColor: "orange",
        alignItems: "center",
      }}
    >
      {dummay.map((u) => (
        <Users key={u.email} user={u} onClick={clickHandler} />
      ))}
    </div>
  );
};

export default MyChats;
