import React from "react";
import { DashBoardTable } from "./DashBoardTable";

const ForensicReport = () => {
  return (
    <div className="flex flex-col justify-start gap-8">
      <h1 className="text-3xl font-bold">Forensic Reports</h1>
      <div className="mt-16 w-full">
        <DashBoardTable />
      </div>
    </div>
  );
};

export { ForensicReport };
