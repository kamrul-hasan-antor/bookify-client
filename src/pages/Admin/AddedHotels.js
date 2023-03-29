import React from "react";
import { useLoaderData } from "react-router-dom";

const AddedHotels = () => {
  const allHotels = useLoaderData();

  return <div>AddedHotels : {allHotels.length}</div>;
};

export default AddedHotels;
