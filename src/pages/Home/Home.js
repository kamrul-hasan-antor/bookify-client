import React from "react";
import Header from "./Header";
import LuxuriasRooms from "./LuxuriasRooms";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Summary from "./Summary";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import ChooseUs from "./ChooseUs";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <LuxuriasRooms />
      <ChooseUs />
      {/* <Summary /> */}
      <Gallery />

      <Reviews />
      {/* <FAQ />
      <Contact /> */}
      <Subscribe />
    </>
  );
};

export default Home;
