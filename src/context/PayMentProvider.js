import React, { createContext, useState } from "react";
export const PaymentContext = createContext();
const PayMentProvider = ({ children }) => {
  const [addedRoom, setAddedRoom] = useState({});

  const room = {
    addedRoom,
    setAddedRoom,
  };

  return (
    <PaymentContext.Provider value={room}>{children}</PaymentContext.Provider>
  );
};

export default PayMentProvider;
