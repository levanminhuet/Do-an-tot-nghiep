import React from "react";
import { text } from "../../ultils/constant";
import { Province, ItemSidebar, RelatedPost, Footer } from "../../components";
import { List, Pagination } from "./index";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const { posts, count } = useSelector((state) => state.post);

  return (
    <div className="w-full flex flex-col gap-3 bg-[#fff]">
      <div>
        <h1 className="text-[28px] font-bold text-blue-600">
          {text.HOME_TITLE}
        </h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      {/* <Province /> */}
      <div className="w-full flex gap-4">
        <div className="w-[80%]">
          <List />
          <Pagination posts={posts} count={count} />
        </div>
        <div className="w-[20%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title="Danh sách cho thuê" />
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="Xem theo giá"
          />
          <ItemSidebar
            isDouble={true}
            type="areaCode"
            content={areas}
            title="Xem theo diện tích"
          />
          {/* <RelatedPost /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;