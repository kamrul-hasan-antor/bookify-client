import React from "react";
import { useLoaderData } from "react-router-dom";

const AllRooms = () => {
  const rooms = useLoaderData();
  return <div>{rooms.length}</div>;
};

export default AllRooms;
