import React, { useEffect } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer";
import List from "./List";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";
import SearchPost from "../components/SearchPost";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getProvinces());
  }, []);
  return (
    <>
      <Header />
      <Slider />
      <SearchPost />
      <List />
      <Footer />
    </>
  );
}

export default Home;
