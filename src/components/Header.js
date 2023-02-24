import React from "react";
import Logo from "../resources/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <nav class="flex justify-between px-20 py-10 items-center bg-white">
        <div className="">
          <img
            class="h-12 flex-none bg-cover  "
            src={Logo}
            alt="#"
            title="Logo"
          />
        </div>
        <div class="flex items-center">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 pt-0.5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              class="ml-2 outline-none bg-transparent font-"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <ul class="flex items-center space-x-6">
            <li class="font-semibold text-gray-700 pointer-events-none">
              Trang chủ
            </li>
            <li class="font-semibold text-gray-700 pointer-events-none">
              Ưu đãi
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </li>
            {!isLoggedIn && (
              <li class="font-semibold text-gray-700 pointer-events">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage("/login");
                  }}
                >
                  Đăng nhập
                </a>
              </li>
            )}
            {isLoggedIn && (
              <li class="font-semibold text-gray-700 pointer-events">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage("/logout");
                  }}
                >
                  Đăng xuất
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
