import React from "react";
import { useNavigate } from "react-router-dom";

function Post(props) {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div key={props.id} class="rounded w-full lg:flex mb-10">
        <img
          class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
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
  );
}

export default Post;
