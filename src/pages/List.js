import React from "react";
import { getPosts } from "../store/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Item";

const List = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);
  if (posts.length === 0) {
    console.log("123");
  }

  return <div>456</div>;
};
export default List;
