import React, { useState } from "react";
import { DashBoardTable } from "./DashBoardTable";
// import { MedicoLegalForm } from "./MedicoLegalForm";
import { StatCard } from "./Card";
import { columns, reports, statusOptions } from "@/config/medicoLegalData";
import FormTabs from "./FormTabs";

const cases = [
  { name: "Active Cases", cases: 45 },
  { name: "Pending Cases", cases: 50 },
  { name: "Completed Cases", cases: 20 },
  { name: "Total Cases", cases: 110 },
];

const PoliceSurgeonOffice = () => {
  const [component, setComponent] = useState("table");

  const renderComponent = () => {
    switch (component) {
      case "table":
        return (
          <DashBoardTable
            setComponent={setComponent}
            showAddButton={true}
            columns={columns}
            reports={reports}
            statusOptions={statusOptions}
          />
        );
      case "form":
        return <FormTabs />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="flex flex-col gap-8  w-full">
      <h1 className="text-3xl font-bold">Police Surgeon Office</h1>

      {component === "table" && (
        <div className="flex gap-8 w-full">
          {cases.map((caseItem) => (
            <StatCard
              key={caseItem.name}
              cardName={caseItem.name}
              cases={caseItem.cases}
            />
          ))}
        </div>
      )}

      <div className="mt-8">{renderComponent()}</div>
    </div>
  );
};

export { PoliceSurgeonOffice };
