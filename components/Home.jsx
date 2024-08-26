import React from "react";
import { StatCard } from "./Card";
import { DashBoardTable } from "./DashBoardTable";
import DefaultLayout from "@/layouts/default";
import { Navbar } from "@nextui-org/navbar";

const cases = [
  { name: "Medico Legal Certificate", cases: 45 },
  { name: "DNA Report", cases: 50 },
  { name: "Forensic Report", cases: 20 },
  { name: "Chemical Examiner Report", cases: 60 },
];
const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-8  w-full">
        <div className="flex gap-8 w-full">
          {cases.map((caseItem) => (
            <StatCard
              key={caseItem.name}
              cardName={caseItem.name}
              cases={caseItem.cases}
            />
          ))}
        </div>
        <div className="mt-16">
          <DashBoardTable />
        </div>
      </div>
    </>
  );
};

export { Home };
