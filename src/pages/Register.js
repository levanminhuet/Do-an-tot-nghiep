import React from "react";
import Logo from "../resources/images/logo.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="w-full"
                alt="Phone image"
              />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <img
                class="h-12 flex justify-center items-center  "
                src={Logo}
                alt="#"
                title="Logo"
                style={{ "margin-left": "auto", "margin-right": "auto" }}
              />
              <div class="mb-6 text-xl text-center ">
                <h2 className="py-4 font-medium  hover:text-black-500">
                  ĐĂNG KÝ TÀI KHOẢN MỚI
                </h2>
                hoặc
                <a
                  href="#"
                  className="font-medium px-2 text-blue-600 hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage("/login");
                  }}
                >
                  Đăng nhập hệ thống
                </a>
              </div>
              <form>
                {/* <!-- Email input --> */}
                <div class="mb-6">
                  <p>Tên đăng nhập</p>
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập tên đăng nhập"
                  />
                </div>

                <div class="mb-6">
                  <p>Số điện thoại</p>
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập SĐT"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div class="mb-6">
                  <p>Mật khẩu</p>
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập mật khẩu"
                  />
                </div>

                <div class="mb-6">
                  <p>Nhập lại mật khẩu</p>
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
