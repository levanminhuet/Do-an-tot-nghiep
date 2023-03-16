import React from "react";
import { memo } from "react";
import { GrStar } from "react-icons/gr";
import { BsBookmarkStarFill } from "react-icons/bs";

function Item({ images, address, attributes, description, star, title, user }) {
  const indexs = [0];
  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++)
      stars.push(<GrStar className="star-item" size={18} color="yellow" />);
    return stars;
  };
  return (
    <div className="block lg:flex lg:space-x-2 px-2 ml-10 mr-10 lg:p-0 mt-10 mb-10 border border-gray-200 py-3">
      <div className="w-full lg:w-5/6 mx-2 mt-3">
        <div className="rounded w-full lg:flex mb-10 ">
          <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden ">
            {images.length > 0 &&
              images
                .filter((i, index) => indexs.some((i) => i === index))
                ?.map((i, index) => {
                  return (
                    <img
                      key={index}
                      src={i}
                      alt="preview"
                      // className="w-[47%] h-[120px] object-cover"
                    />
                  );
                })}
          </div>
          <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div>
              <div className="mt-3 md:mt-0 text-blue-700 hover:text-gray-700 font-bold text-xl mb-2 uppercase">
                {title}
                <div className="flex flex-nowrap">
                  {handleStar(+star).length > 0 &&
                    handleStar(+star).map((star, number) => {
                      return <span key={number}>{star}</span>;
                    })}
                </div>
                {/* <div className="w-[10%] flex justify-end">
                  <BsBookmarkStarFill size={24} color="orange" />
                </div> */}
              </div>
              <p className="text-blue-600 text-base underline underline-offset-4">
                {address}
                <a
                  href="https://www.google.com/maps"
                  className="pl-2 underline underline-offset-4"
                >
                  Xem bản đồ
                </a>
              </p>
              <p className="text-gray-600 text-base"></p>
              <p className="text-gray-600 text-base text-ellipsis">
                {description}
              </p>
              <p className="text-blue-600 text-xl"> {attributes?.price}</p>
              <div className=" flex items-center">
                <img
                  src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
                  alt="avatar"
                  className="w-[30px] mt-2 mb-2 mr-2 h-[30px] object-cover rounded-full"
                />
                <p>{user?.name}</p>
              </div>

              <a
              // href="#"
              // onClick={(e) => {
              //   e.preventDefault();
              //   goToPage("/detail");
              // }}
              >
                <button
                  type="button"
                  className="my-2 px-3 py-2 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                >
                  <span className="ml-2 uppercase">xem phòng</span>
                </button>
              </a>
            </div>
            <div className="flex mt-3  "></div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/6 mx-2 mt-3 ">
        <div className="content-start flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 stroke-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="font-semibold pl-2"></p>
        </div>
        {/* <StarRating /> */}
        <p></p>
      </div>
    </div>
  );
}

export default memo(Item);
