import React from "react";
import { StatCard } from "./Card";
import { DashBoardTable } from "./DashBoardTable";
import { columns, reports, statusOptions } from "../config/dashBoardData";

const cases = [
  { name: "Police Surgeon Office", cases: 45 },
  { name: "ICCBS DNA Department", cases: 50 },
  { name: "Police Forensic Department", cases: 20 },
  { name: "Chemical Examination Department", cases: 60 },
];
const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-8  w-full">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="flex gap-8 w-full">
          {cases.map((caseItem) => (
            <StatCard
              key={caseItem.name}
              cardName={caseItem.name}
              cases={caseItem.cases}
            />
          ))}
        </div>
        <div className="mt-8">
          <DashBoardTable
            showAddButton={false}
            columns={columns}
            reports={reports}
            statusOptions={statusOptions}
          />
        </div>
      </div>
    </>
  );
};

export { Home };
