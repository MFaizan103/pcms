"use client";
import React, { useState } from "react";

import { Sidebar } from "@/components/SideBar";
import { Home } from "@/components/Home";
import { PoliceSurgeonOffice } from "@/components/PoliceSurgeonOffice";
import { DnaReport } from "@/components/DnaReport";
import { ChemicalExaminerReport } from "@/components/ChemicalExaminerReport";
import { ForensicReport } from "@/components/ForensicReport";

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "police-surgeon-office":
        return <PoliceSurgeonOffice />;
      case "iccbs-dna-department":
        return <DnaReport />;
      case "police-forensic-department":
        return <ForensicReport />;
      case "chemical-examination-department":
        return <ChemicalExaminerReport />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen">
      <div className=" w-2/12 ">
        <Sidebar setActiveComponent={setActiveComponent}  activeComponent={activeComponent}/>
      </div>
      <div className="w-10/12  pt-8 mx-24 ">{renderComponent()}</div>
    </div>
  );
};

export default DashBoard;
