import React from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthProvider";

const ProfileMenu = (props) => {
  const { logout } = useAuthContext();
  const profileClickHandler = () => {
    props.onOpenProfile();
  };

  const logoutClickHandler = () => {
    logout();
  };

  return (
    <Navbar style={{ marginInline: "10px" }}>
      <Nav>
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
          <NavDropdown.Item onClick={profileClickHandler}>
            Profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logoutClickHandler}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default ProfileMenu;
