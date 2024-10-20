import React from "react";
import { Image } from "react-bootstrap";

const User = (props) => {
  const { user } = props;
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        margin: "8px",
        backgroundColor: "black",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <div>
        <Image
          src={user.imageUrl}
          roundedCircle
          alt="Profile"
          style={{ width: "40px", height: "40px", border: "2px solid" }}
          className="m-2"
        />
      </div>
      <div>
        <div>{user.name}</div>
        <div>Email: {user.email}</div>
      </div>
    </div>
  );
};

export default User;
