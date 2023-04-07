import React, { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { ImPencil2 } from "react-icons/im";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

const activeStyle =
  "hover:bg-sky-200 flex  rounded-md items-center gap-2 py-2 font-bold bg-sky-400";
const notActiceStyle =
  "hover:bg-sky-200 flex  rounded-md items-center gap-2 py-2 cursor-pointer";

const memuSidebar = [
  {
    id: 10,
    text: "Tổng quan",
    path: "/admin/dashboard",
    icon: <TbLayoutDashboard size={24} />,
  },
  {
    id: 30,
    text: "Quản lý thành viên",
    path: "/admin/manageUser",
    icon: <MdOutlineGroups size={24} />,
  },
  {
    id: 20,
    text: "Báo cáo vi phạm",
    path: "/admin/manageReport",
    icon: <MdOutlineReportGmailerrorred size={24} />,
  },
  {
    id: 80,
    text: "Yêu cầu gia hạn",
    path: "/admin/manageExpired",
    icon: <AiOutlineFieldTime size={24} />,
  },
  {
    id: 90,
    text: "Thông tin cá nhân",
    path: "/admin/acount",
    icon: <AiOutlineUser size={24} />,
  },
];

const AdminSidebar = ({ admin }) => {
  const navigate = useNavigate();
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="flex-none p-4 flex flex-col gap-6 bg-white min-h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={currentData?.avatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">{currentData?.name}</span>
            <small>{currentData?.phone}</small>
          </div>
        </div>
        <span>
          Mã thành viên:{" "}
          <small className="font-medium">
            {currentData?.id?.toUpperCase()}
          </small>
        </span>
      </div>
      <div>
        {memuSidebar?.map((item) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : notActiceStyle
              }
              key={item.id}
              to={item?.path}
            >
              {item?.icon}
              {item.text}
            </NavLink>
          );
        })}
        <span onClick={() => navigate("/")} className={notActiceStyle}>
          <AiOutlineLogout size={24} />
          Tới website
        </span>
      </div>
    </div>
  );
};

export default memo(AdminSidebar);
