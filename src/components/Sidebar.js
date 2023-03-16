import React, { memo } from "react";
import Item from "./Item";
import { GrFormNext } from "react-icons/gr";
import { formatVietNam } from "../uitils/formatVietNam";
import { Link } from "react-router-dom";

function Sidebar({ title, content }) {
  return (
    <div className=" mt-10 ml-4 p-4 rounded-md bg-white w-full border border-gray-200">
      <h3 className="text-lg text-blue-400 font-semibold mb-4">{title}</h3>
      <div>
        {content?.length > 0 &&
          content.map((item) => {
            return (
              <Link
                to={`${formatVietNam(item.value)}`}
                key={item.code}
                className="flex gap-1 items-center  hover:text-blue-400  pointer-events "
              >
                <GrFormNext size={12} color="#cccc" />
                {item.value}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default memo(Sidebar);
