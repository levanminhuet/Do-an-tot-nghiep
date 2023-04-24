import React from "react";
import { Navigation } from "../Public";

const Header = () => {
  return (
    <div className="w-full flex flex-none h-[40px]">
      <div className="flex justify-center items-center font-bold text-blue-600 text-white w-[256px] flex-none">
        Myhome.com
      </div>
      <div className="flex-auto">
        <Navigation isAdmin={true} />
      </div>
    </div>
  );
};

export default Header;
