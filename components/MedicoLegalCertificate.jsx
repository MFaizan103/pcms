import React, { useState } from "react";
import { DashBoardTable } from "./DashBoardTable";
import { MedicoLegalForm } from "./MedicoLegalForm";
const MedicoLegalCertificate = () => {
  const [component, setComponent] = useState("table");
  const renderComponent = () => {
    switch (component) {
      case "table":
        return <DashBoardTable setComponent={setComponent} />;
      case "form":
        return <MedicoLegalForm />;
      default:
        return <Home />;
    }
    f;
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Medico Legal Certificates</h1>
      <div className="mt-8">{renderComponent()}</div>
    </div>
  );
};

export { MedicoLegalCertificate };
