import React from "react";

import SideDrawer from "../components/Layout/SideDrawer";
import MyChats from "../components/Chat/MyChats";
import ChatBox from "../components/Chat/ChatBox";

const ChatPage = () => {
  return (
    <section className="main">
      <div className="row-center">
        <SideDrawer />
      </div>
      <div className="row-between">
        <MyChats />
        <ChatBox />
      </div>
    </section>
  );
};

export default ChatPage;
