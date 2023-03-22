import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatVietNam } from "../uitils/formatVietNam";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function Apartment() {
  const { prices, areas, categories } = useSelector((state) => state.app);
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const [categoryCode, setCategoryCode] = useState("none");
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const category = categories?.find(
      (item) => `/${formatVietNam(item.value)}` === location.pathname
    );
    console.log(category);
    setCategoryCurrent(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [location]);
  return (
    <div>
      <Header />
      <List categoryCode={categoryCode} />
    </div>
  );
}

export default Apartment;
