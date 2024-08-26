"use client";
import React, { useState } from "react";

import { Sidebar } from "@/components/SideBar";
import { Home } from "@/components/Home";
import { MedicoLegalCertificate } from "@/components/MedicoLegalCertificate";
import { DnaReport } from "@/components/DnaReport";
import { ChemicalExaminerReport } from "@/components/ChemicalExaminerReport";
import { ForensicReport } from "@/components/ForensicReport";

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "medico-legal-certificate":
        return <MedicoLegalCertificate />;
      case "dna-report":
        return <DnaReport />;
      case "forensic-report":
        return <ForensicReport />;
      case "chemical-examiner-report":
        return <ChemicalExaminerReport />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen">
      <div className=" w-2/12 ">
        <Sidebar setActiveComponent={setActiveComponent} />
      </div>
      <div className="w-10/12 pr-8 pt-8 ">{renderComponent()}</div>
    </div>
  );
};

export default DashBoard;
