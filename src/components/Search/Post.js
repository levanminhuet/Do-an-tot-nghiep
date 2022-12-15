import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating";

function Post(props) {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <div
      key={props.id}
      className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10 border border-gray-200 py-3"
    >
      <div className="w-full lg:w-5/6 mx-2 mt-3">
        <div class="rounded w-full lg:flex mb-10 ">
          <img
            class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden "
            src={props.imageSrc}
            alt={props.imageAlt}
            title="deit is very important"
          ></img>
          <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div>
              <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2 uppercase">
                {props.name}
              </div>
              <p class="text-blue-600 text-base underline underline-offset-4">
                {props.address}{" "}
                <a
                  href="https://www.google.com/maps"
                  className="pl-2 underline underline-offset-4"
                >
                  Xem bản đồ
                </a>
              </p>
              <p class="text-gray-600 text-base">{props.nearaddress}</p>
              <p class="text-gray-600 text-base">
                Phòng gồm: phòng ngủ, bếp ăn, nhà vệ sinh riêng
              </p>
              <p class="text-blue-600 text-xl">{props.price} VNĐ</p>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage("/detail");
                }}
              >
                <button
                  type="button"
                  class="my-2 px-3 py-2 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                >
                  <span class="ml-2 uppercase">xem phòng</span>
                </button>
              </a>
            </div>
            <div class="flex mt-3  "></div>
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
          <p className="font-semibold pl-2">{props.titleRate}</p>
        </div>
        <StarRating />
        <p>{props.rate}</p>
      </div>
    </div>
  );
}

export default Post;
