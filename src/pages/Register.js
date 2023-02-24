import React, { useEffect, useState } from "react";
import Logo from "../resources/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { apiRegister } from "../services/auth";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

function Register() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(location.state?.flag);
  // const navigate = useNavigate();
  // const goToPage = (path) => {
  //   navigate(path);
  // };

  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  // console.log(location.state);

  const handleSubmit = async () => {
    dispatch(actions.register(payload));
    console.log(payload);
  };
  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <img
                className="h-12 flex justify-center items-center  "
                src={Logo}
                alt="#"
                title="Logo"
                style={{ "margin-left": "auto", "margin-right": "auto" }}
              />
              <div className="mb-6 text-xl text-center ">
                <h2 className="py-4 font-medium  hover:text-black-500">
                  {isRegister ? "Đăng ký tài khoản" : "Đăng nhập tài khoản"}
                </h2>
              </div>
              <form>
                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <p>Tên đăng nhập</p>
                  <InputForm
                    placeholder="Nhập tên đăng nhập"
                    value={payload.name}
                    setValue={setPayload}
                    type={"name"}
                  />
                </div>

                <div className="mb-6">
                  <p>Số điện thoại</p>
                  <InputForm
                    // class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập SĐT"
                    value={payload.phone}
                    setValue={setPayload}
                    type={"phone"}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <p>Mật khẩu</p>
                  <InputForm
                    // class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập mật khẩu"
                    value={payload.password}
                    setValue={setPayload}
                    type={"password"}
                  />
                </div>

                {/* <div class="mb-6">
                  <p>Nhập lại mật khẩu</p>
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div> */}

                {/* <!-- Submit button --> */}
                <Button
                  text={isRegister ? "Đăng kí" : "Đăng nhập"}
                  bgColor="bg-secondary1"
                  onClick={handleSubmit}
                  className="text-gray-700"
                >
                  Đăng ký
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
