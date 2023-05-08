import React, { useCallback, useEffect, useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../ultils/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { path } from "../../ultils/constant";

const {
  BsChevronRight,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );
  const [queries, setQueries] = useState({});
  const [arrMinMax, setArrMinMax] = useState({});
  const [defaultText, setDefaultText] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!location?.pathname.includes(path.SEARCH)) {
      setArrMinMax({});
      setQueries({});
      setAddress("");
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
    queryCodesObj.address = address;
    let titleSearch = `${
      queryTextObj.category ? queryTextObj.category : "Cho thuê tất cả"
    } ${address ? `địa chỉ ${address}` : ""} ${
      queryTextObj.price ? `giá ${queryTextObj.price}` : ""
    } ${queryTextObj.area ? `diện tích ${queryTextObj.area}` : ""} `;
    navigate(
      {
        pathname: path.SEARCH,
        search: createSearchParams(queryCodesObj).toString(),
      },
      { state: { titleSearch } }
    );
  };
  return (
    <>
      <div className="p-[10px] w-[95%] md:w-4/5 lg:w-3/5 my-3 bg-blue-600 rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category", "Tìm tất cả")}
          className="cursor-pointer  w-full"
        >
          <SearchItem
            IconBefore={<MdOutlineHouseSiding />}
            fontWeight
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.category}
            defaultText={"Tìm tất cả"}
          />
        </span>
        <input
          type="text"
          className="p-2 outline-none w-full rounded-md text-sm placeholder:text-[13.3px]"
          placeholder="&#9992; Tìm địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* <span onClick={() => handleShowModal(provinces, 'address', 'Địa chỉ')} className='cursor-pointer  w-full'>
                    <SearchItem IconBefore={<HiOutlineLocationMarker />} IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />} text={queries.province} defaultText={'Địa chỉ'} />
                </span> */}
        <span
          onClick={() => handleShowModal(prices, "price", "Chọn giá")}
          className="cursor-pointer  w-full"
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
          className="cursor-pointer  w-full"
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
          className="outline-none p-2 rounded-full flex-1 bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
        >
          <FiSearch size={24} />
        </button>
      </div>
      {isShowModal && (
        <Modal
          handleSubmit={handleSubmit}
          queries={queries}
          arrMinMax={arrMinMax}
          content={content}
          name={name}
          setIsShowModal={setIsShowModal}
          defaultText={defaultText}
        />
      )}
    </>
  );
};

export default Search;
