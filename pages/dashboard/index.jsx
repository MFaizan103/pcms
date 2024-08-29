import React from "react";
import { StatCard } from "../../ui/dashboard/card/Card";
import { DashBoardTable } from "../../ui/dashboard/table/DashBoardTable";
import { columns, reports, statusOptions } from "../../config/dashBoardData";
import DashBoardLayout from "./layout";

const cases = [
  { name: "Police Surgeon Office", cases: 45 },
  { name: "ICCBS DNA Department", cases: 50 },
  { name: "Police Forensic Department", cases: 20 },
  { name: "Chemical Examination Department", cases: 60 },
];
const Home = () => {
  return (
    <DashBoardLayout>
      <div className="w-full">
        <h1 className="text-xl font-bold my-4">Dashboard</h1>

        <div className="flex gap-8">
          {cases.map((caseItem) => (
            <StatCard
              key={caseItem.name}
              cardName={caseItem.name}
              cases={caseItem.cases}
            />
          ))}
        </div>
        <div className="mt-4">
          <DashBoardTable
            showAddButton={false}
            columns={columns}
            reports={reports}
            statusOptions={statusOptions}
          />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Home;
