import React from "react";
import Home from "../../resources/images/chungcumini.jpg";
import Post from "./Post";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

const posts = [
  {
    id: 1,
    name: "Chung cư độc thân",
    href: "#",
    imageSrc: Home,
    imageAlt: "Home",
    address: "Xuân Thuỷ, Cầu Giấy, Hà Nội",
    nearaddress: "Gần Trường đại học sư phạm 1",
    price: "4000000",
    titleRate: "Rất tốt",
    rate: "90 đánh giá",
  },
  {
    id: 2,
    name: "Nhà biệt thự",
    href: "#",
    imageSrc: Home,
    imageAlt: "Home",
    address: "Trần Quốc Hoàn, Cầu Giấy, Hà Nội",
    nearaddress: "",
    price: "2000000",
    titleRate: "Rất tốt",
    rate: "100 đánh giá",
  },
  {
    id: 3,
    name: "Chung cư mini",
    href: "#",
    imageSrc: Home,
    imageAlt: "Home",
    address: "Phạm Hùng, Cầu Giấy, Hà Nội",
    nearaddress: "",
    price: "1000000",
    titleRate: "Tốt",
    rate: "100 đánh giá",
  },

  // More products...
];

// Filter
const priceRange = {
  name: "khoảng giá",
  options: [
    {
      id: 1,
      minPrice: 0,
      maxPrice: 500000,
      label: "0 - 500K",
    },
    {
      id: 2,
      minPrice: 500000,
      maxPrice: 1000000,
      label: "500K - 1tr",
    },
    {
      id: 3,
      minPrice: 1000000,
      maxPrice: 3000000,
      label: "1tr - 3tr",
    },
    {
      id: 4,
      minPrice: 3000000,
      maxPrice: 6000000,
      label: "3tr - 6tr",
    },
    //...
  ],
};
function Container() {
  return (
    <div>
      {/* <!-- component --> */}

      <div className="max-w-screen-xl mx-auto">
        <div className="mt-10">
          <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            {/* <!-- post cards --> */}
            {/* <!-- left sidebar --> */}
            <div className="w-full lg:w-1/5 px-3">
              <Disclosure
                as="div"
                key={2}
                className="border-b border-gray-200 py-3"
                defaultOpen={true}
              >
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          Khoảng giá
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-3">
                      <div className="space-y-4">
                        {priceRange.options.map((option, optionIdx) => {
                          return (
                            <div
                              key={option.id}
                              className="flex items-center"
                              // onChange={handleChangePriceRange}
                            >
                              <input
                                id={`filter-price-${optionIdx}`}
                                name={"category"}
                                value={option.id}
                                type="radio"
                                // defaultChecked={option.checked}
                                className="h-4 w-4 rounded-full border-gray-300 text-lime-600 focus:ring-lime-500"
                              />
                              <label
                                htmlFor={`filter-price-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="w-full lg:w-4/5">
              <h1>Kết quả tìm kiếm</h1>
              {posts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
            {/* <div className="w-full lg:w-1/5 ">
              <h2 className="text-l">Rất tốt</h2>
              <p>100 đánh giá</p>
              <StartRating />
            </div> */}
          </div>
        </div>

        {/* <!-- main ends here --> */}

        {/* <!-- footer --> */}
        {/* <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
          <div className="flex">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4">
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Terms & Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
}

export default Container;
