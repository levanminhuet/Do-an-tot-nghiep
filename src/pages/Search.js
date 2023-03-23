import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "./List";
import { FcSearch } from "react-icons/fc";

function Search() {
  return (
    <div>
      <Header />
      <div className="flex text-blue-400 justify-center items-center font-bold text-xl ">
        <FcSearch size={24} className="mr-2" />
        <h1>KẾT QUẢ TÌM KIẾM</h1>
      </div>
      <List />
      <Footer />
    </div>
  );
}

export default Search;
