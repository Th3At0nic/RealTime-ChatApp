import React, { useState, useEffect } from "react";
import queryString from "query-string";

import io from "socket.io-client";
import "./Chat.css";

const Chat = ({ location }) => {
  useEffect(() => {
    const data = queryString.parse(location);

    console.log(location);
    console.log(data);
  });

  return <h1>CHAT</h1>;
};

export default Chat;
