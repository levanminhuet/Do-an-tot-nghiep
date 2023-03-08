import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer";
import InputSearch from "../components/Home/InputSearch";
import List from "./List";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <InputSearch />
      <List />
      <Footer />
    </div>
  );
}

export default Home;
