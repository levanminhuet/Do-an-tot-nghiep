import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { Header, Sidebar } from './'
import Sidebar from "./Sidebar";

function System() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) return <Navigate to={"/login"} replace={true} />;
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* <Header /> */}
      <div className="flex w-full flex-auto">
        <Sidebar />
        <div className="flex-auto bg-white shadow-md h-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default System;
