import React, { useEffect, useState, useRef } from "react";
import Logo from "../resources/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { apiGetCategories } from "../services/caregory";
import { formatVietNam } from "../uitils/formatVietNam";
import "../Style/Header.css";
import { useSearchParams } from "react-router-dom";

const notActive = "hover:bg-bule";
const active = "hover:bg-red";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headerRef = useRef();
  const [searchParams] = useSearchParams();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const goToPage = (path) => {
    navigate(path);
  };

  // const [categories, setCategories] = useState([]);
  const { categories } = useSelector((state) => state.app);
  useEffect(() => {
    // const fetchCategories = async () => {
    //   const response = await apiGetCategories();
    //   if (response?.data.err === 0) {
    //     setCategories(response.data.response);
    //   }
    // };
    // fetchCategories();
    dispatch(actions.getCategories());
  }, []);

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);
  return (
    <div ref={headerRef}>
      <div className="flex justify-between px-20 py-10 items-center bg-white">
        <div>
          <img
            className="h-12 flex-none bg-cover  "
            src={Logo}
            href="#"
            title="Logo"
            onClick={(e) => {
              e.preventDefault();
              goToPage("/");
            }}
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 text-gray-600"
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
              className="ml-2 outline-none bg-transparent"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="font-semibold text-gray-700 hover:bg-blue-400 pointer-events-none">
              <Link to="/">Trang chủ</Link>
            </div>

            {categories?.length > 0 &&
              categories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" font-semibold text-gray-700 text-l hover:text-blue-600 pointer-events"
                  >
                    <Link
                      to={`${formatVietNam(item.value)}`}
                      className={({ isActive }) =>
                        isActive ? active : notActive
                      }
                    >
                      {item.value}
                    </Link>
                  </div>
                );
              })}

            <div className="font-semibold text-gray-700 pointer-events">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage("/he-thong");
                }}
              >
                Đăng bài
              </a>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            {!isLoggedIn && (
              <div className="font-semibold text-gray-700 ">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage("/login");
                  }}
                >
                  Đăng nhập
                </a>
              </div>
            )}
            {isLoggedIn && (
              <div className="font-semibold text-gray-700">
                <a href="#" onClick={() => dispatch(actions.logout())}>
                  Đăng xuất
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
