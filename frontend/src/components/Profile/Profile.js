import React from "react";
import { Image } from "react-bootstrap";

const Profile = (props) => {
  const { user } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>{user.name}</h1>
      <Image
        src="favicon.ico"
        roundedCircle
        alt="Profile"
        style={{ width: "12rem", height: "12rem", border: "2px solid" }}
      />
      <p>{user.about}</p>
    </div>
  );
};

export default Profile;
