import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import { useLocation } from "react-router-dom";

let socket;

const Chat = () => {
  const location = useLocation();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      // socket.emit("disconnect"); //this is the previous version, gives error now bcz disconnect is reserved word
      socket.disconnect();

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return <h1>CHAT</h1>;
};

export default Chat;
