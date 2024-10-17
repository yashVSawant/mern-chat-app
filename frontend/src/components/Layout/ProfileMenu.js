import React from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

const ProfileMenu = () => {
  return (
    <Navbar style={{ marginInline: "10px" }}>
      <Nav>
        {/* <Image
          src="/favicon.ico"
          roundedCircle
          alt="Profile"
          style={{ width: "40px", height: "40px" }}
        /> */}
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <Image
              src="/favicon.ico"
              roundedCircle
              alt="Profile"
              style={{ width: "40px", height: "40px", border: "2px solid" }}
            />
          }
          align="end"
        >
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default ProfileMenu;
