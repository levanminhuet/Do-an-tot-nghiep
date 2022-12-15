import React from "react";

function InputSearch() {
  return (
    <div>
      <div>
        <h2 className="px-3 pt-4 mt-4 font-bold text-blue-600 text-xl text-center uppercase ">
          HÃY BẮT ĐẦU TÌM KIẾM PHÒNG TRỌ PHÙ HỢP CHO BẠn
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto  mt-1 flex justify-center items-center px-20">
        <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div class="flex bg-gray-100 p-2 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 opacity-30"
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
              class="bg-gray-100 outline-none"
              type="text"
              placeholder="Nhập địa chỉ phòng trọ..."
            />
          </div>
          <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
            <span>All</span>

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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div class="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputSearch;
