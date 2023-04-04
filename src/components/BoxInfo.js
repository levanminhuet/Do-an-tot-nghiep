import React, { memo } from "react";

import { BsDot } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";

const BoxInfo = ({ userData }) => {
  return (
    <div className="w-full bg-sky-600 rounded-md flex flex-col items-center p-4 gap-4">
      {/* <img src={anonAvatar} alt="avatar" className='w-16 h-16 object-contain rounded-full' /> */}
      <h3 className="font-medium text-xl">{userData?.name}</h3>
      <span className="flex items-center">
        <BsDot color="green" size={28} />
        <span>Đang hoạt động</span>
      </span>
      <a
        className="bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg"
        href="/"
      >
        <BsTelephoneFill />
        {userData?.phone}
      </a>
      <a
        className="bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md font-bold text-lg"
        href={`https://zalo.me/${userData?.zalo}`}
      >
        <SiZalo color="blue" size={35} />
      </a>
      <a
        className="bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md font-bold text-lg"
        href={``}
      >
        <FaFacebookMessenger color="blue" size={35} />
      </a>
    </div>
  );
};

export default memo(BoxInfo);
