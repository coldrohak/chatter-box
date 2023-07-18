import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const socket = io("https://chatter-box-web.onrender.com");

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider
      value={{
        socket,
      }}>
      {children}
    </SocketContext.Provider>
  );
};
export const SocketState = () => {
  return useContext(SocketContext);
};

export default SocketProvider;
