import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="w-full h-min-screen flex gap-4">
      <div className="w-[327px] flex-none py-4 pl-4 h-full shadow-sm">
        <AdminSidebar />
      </div>
      <div className="flex-auto h-full py-4 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
