import React from "react";
import { useNavigate } from "react-router-dom";
function Detail() {
  return (
    <div>
      {/* <!-- component --> */}
      <div class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" class="flex flex-col  justify-left">
            <h1 class="text-4xl font-semibold leading-9  text-blue-600 ">
              CHUNG CƯ MINI
            </h1>
            <p class="text-base leading-normal  text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              Số 2, Trần Quốc Hoàn, Cầu Giấy, Hà Nội
            </p>
            <p class="text-base leading-normal  text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              4000000 VNĐ
            </p>
          </div>
          <div class="lg:flex items-stretch md:mt-12 mt-8">
            <div class="lg:w-1/2">
              <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div class="sm:w-1/2 relative">
                  <div>
                    <div class="absolute bottom-0 left-0 p-6">
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      ></a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/DYxtCJq/img-1.png"
                    class="w-full"
                    alt="chair"
                  />
                </div>
                <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <div class="absolute bottom-0 left-0 p-6">
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      ></a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3C5HvxC/img-2.png"
                    class="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
              <div class="relative">
                <div>
                  <div class="absolute bottom-0 left-0 md:p-10 p-6">
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    ></a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/Ms4qyXp/img-3.png"
                  alt="sitting place"
                  class="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  class="w-full mt-4 sm:hidden"
                  src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
            </div>
            <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div class="relative">
                <div>
                  <div class="absolute bottom-0 left-0 md:p-10 p-6">
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    ></a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/6Wfjf2w/img-4.png"
                  alt="sitting place"
                  class="w-full sm:block hidden"
                />
                <img
                  class="w-full sm:hidden"
                  src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
              <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div class="relative w-full">
                  <div>
                    <div class="absolute bottom-0 left-0 p-6">
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      ></a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3yvZBpm/img-5.png"
                    class="w-full"
                    alt="chair"
                  />
                </div>
                <div class="relative w-full sm:mt-0 mt-4">
                  <div>
                    <div class="absolute bottom-0 left-0 p-6">
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p class="pr-2 text-sm font-medium leading-none"></p>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/gDdnJb5/img-6.png"
                    class="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto  block lg:flex lg:space-x-2">
        <div className="w-full lg:w-3/4 ">
          Tọa lạc tại thành phố Hà Nội, cách trung tâm thương mại Vincom Center
          Nguyễn Chí Thanh 3,1 km, MIA HOTEL cung cấp chỗ nghỉ với nhà hàng, chỗ
          đỗ xe riêng miễn phí, trung tâm thể dục và quầy bar. Mỗi chỗ nghỉ tại
          khách sạn 4 sao này đều có tầm nhìn ra quang cảnh thành phố và du
          khách có thể thư giãn tại sảnh khách chung cũng như khu vườn. Chỗ nghỉ
          cung cấp dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại
          tệ cho khách. Tất cả phòng nghỉ tại khách sạn có máy điều hòa, khu vực
          ghế ngồi, TV truyền hình vệ tinh màn hình phẳng, két an toàn và phòng
          tắm riêng với bồn nước nóng, dép cùng máy sấy tóc. Mỗi phòng đều được
          trang bị tủ để quần áo và ấm đun nước.
        </div>
        <div className="w-full lg:w-1/4 bg-blue-100 px-2 py-4 ">
          <p className="text-xl font-medium">Điểm nổi bật của phòng thuê</p>
          <p className="text-l font-normal">
            <p>Phòng có:</p>
            <p>1 phòng bếp</p>
            <p>Nhà vệ sinh riêng</p>
            <p>Sạch sẽ</p>
          </p>
          <button
            type="button"
            class="my-2 px-3 py-2 m-auto  justify-center bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
          >
            <span class=" uppercase text-center">Thuê phòng</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
