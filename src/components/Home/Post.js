import React from "react";

function Post(props) {
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
            <p class="text-blue-600 text-base">{props.address}</p>
            <p class="text-gray-600 text-base">{props.nearaddress}</p>
            <p class="text-gray-600 text-base">
              Phòng gồm: phòng ngủ, bếp ăn, nhà vệ sinh riêng
            </p>
          </div>
          <div class="flex mt-3  ">{props.price} VNĐ</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
