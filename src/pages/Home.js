import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer";
import InputSearch from "../components/Home/InputSearch";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <InputSearch />
      <Footer />
    </div>
  );
}

export default Home;
