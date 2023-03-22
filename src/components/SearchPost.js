import React from "react";
import Modal from "./Modal";
import SearchItem from "./SearchItem";

import { BsChevronRight } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbReportMoney } from "react-icons/tb";
import { RiCrop2Line } from "react-icons/ri";
import { MdOutlineHouseSiding } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";

function SearchPost() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [defaultText, setDefaultText] = useState("");
  const [name, setName] = useState("");
  const [arrMinMax, setArrMinMax] = useState({});
  const [queries, setQueries] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    if (!location?.pathname.includes("/Search")) {
      setArrMinMax({});
      setQueries({});
    }
  }, [location]);

  const handleShowModal = (content, name, defaultText) => {
    setContent(content);
    setName(name);
    setDefaultText(defaultText);
    setIsShowModal(true);
  };

  const handleSubmit = useCallback(
    (e, query, arrMaxMin) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowModal(false);
      arrMaxMin && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [isShowModal, queries]
  );

  const handleSearch = () => {
    const queryCodes = Object.entries(queries)
      .filter((item) => item[0].includes("Number") || item[0].includes("Code"))
      .filter((item) => item[1]);
    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });
    const queryText = Object.entries(queries).filter(
      (item) => !item[0].includes("Code") || !item[0].includes("Number")
    );
    let queryTextObj = {};
    queryText.forEach((item) => {
      queryTextObj[item[0]] = item[1];
    });
    let titleSearch = `${
      queryTextObj.category ? queryTextObj.category : "Cho thuê tất cả"
    } ${queryTextObj.province ? `tỉnh ${queryTextObj.province}` : ""} ${
      queryTextObj.price ? `giá ${queryTextObj.price}` : ""
    } ${queryTextObj.area ? `diện tích ${queryTextObj.area}` : ""} `;
    navigate(
      {
        pathname: "/Search",
        search: createSearchParams(queryCodesObj).toString(),
      },
      { state: { titleSearch } }
    );
  };

  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category", "Tìm tất cả")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<MdOutlineHouseSiding />}
            fontWeight
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.category}
            defaultText={"Tìm tất cả"}
          />
        </span>
        <span
          onClick={() => handleShowModal(provinces, "province", "Toàn quốc")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.province}
            defaultText={"Toàn quốc"}
          />
        </span>
        <span
          onClick={() => handleShowModal(prices, "price", "Chọn giá")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.price}
            defaultText={"Chọn giá"}
          />
        </span>
        <span
          onClick={() => handleShowModal(areas, "area", "Chọn diện tích")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.area}
            defaultText={"Chọn diện tích"}
          />
        </span>
        <button
          type="button"
          onClick={handleSearch}
          className="outline-none rounded-md py-2 px-4 flex-1 bg-blue-600 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Modal
          queries={queries}
          content={content}
          name={name}
          setIsShowModal={setIsShowModal}
          defaultText={defaultText}
          handleSubmit={handleSubmit}
          arrMinMax={arrMinMax}
        />
      )}
    </div>
  );
}

export default SearchPost;
