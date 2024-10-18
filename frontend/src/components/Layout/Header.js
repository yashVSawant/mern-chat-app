import React, { useState } from "react";
import ProfileMenu from "../Profile/ProfileMenu";
import Modal from "../UI/Modal";
import Profile from "../Profile/Profile";
import SearchDrawer from "../Search/SearchDrawer";

const Header = () => {
  const user = { name: "yash", about: "do good an leave" };
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="row-between sideDrawer">
      <SearchDrawer />
      <h1>Chatters-App</h1>
      <div className="row-between">
        <div className="row" style={{ margin: "3px" }}>
          <i class="fas fa-bell"></i>
        </div>
        {openProfile && (
          <Modal onClose={() => setOpenProfile(false)}>
            <Profile user={user} />
          </Modal>
        )}
        <ProfileMenu
          onOpenProfile={() => setOpenProfile((prevValue) => !prevValue)}
        />
      </div>
    </div>
  );
};

export default Header;
