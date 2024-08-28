import React from "react";
import { Sidebar } from "@/ui/dashboard/sidebar/SideBar";
const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <div className="md:max-w-[18%] min-h-screen bg-slate-600 ">
        <Sidebar />
      </div>
      <div className="md:max-w-[75%] flex-1 mx-auto ">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
