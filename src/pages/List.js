import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Item";
import { getPosts } from "../store/actions/post";
import { getPostsLimit } from "../store/actions/post";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Sidebarfilter from "../components/Sidebarfilter";
import * as actions from "../store/actions";

const List = ({ categoryCode }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  // console.log(posts);

  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchParamsObject = {};
    params?.forEach((i) => {
      if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
        searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
      } else {
        searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
      }
    });
    if (categoryCode) searchParamsObject.categoryCode = categoryCode;
    dispatch(getPostsLimit(searchParamsObject));
  }, [searchParams, categoryCode]);

  //api categorie
  const { categories, prices, areas } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getPrices());
  }, []);

  useEffect(() => {
    dispatch(actions.getAreas());
  }, []);

  // useEffect(() => {
  //   dispatch(actions.getProvinces());
  // }, []);

  // console.log(prices);

  return (
    <div className="block lg:flex">
      <div className="w-full lg:w-1/6 ">
        <Sidebar content={categories} title="Danh mục" />
        <Sidebarfilter type="priceCode" content={prices} title="Xem theo giá" />
        <Sidebarfilter
          type="areaCode"
          content={areas}
          title="Xem theo diện tích"
        />
      </div>

      <div className="w-full lg:w-5/6 ">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item.images?.image)}
                title={item.title}
                user={item.user}
                star={item.star}
              />
            );
          })}
        <Pagination />
      </div>
    </div>
  );
};
export default List;
