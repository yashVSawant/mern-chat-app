import React from "react";

import Header from "../components/Layout/Header";
import MyChats from "../components/Chat/MyChats";
import ChatBox from "../components/Chat/ChatBox";

const ChatPage = () => {
  return (
    <section className="main">
      <div className="row-center">
        <Header />
      </div>
      <div className="row-between">
        <MyChats />
        <ChatBox />
      </div>
    </section>
  );
};

export default ChatPage;
