import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { MedicoLegalForm } from "./MedicoLegalForm";

export default function TabUI() {
  const [selected, setSelected] = React.useState("Medico Legal Certificate");

  return (
    <div className="flex w-full items-center flex-col mb-8">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="Medico Legal Certificate" title="Medico Legal Certificate">
          {/* <MedicoLegalForm /> */}
        </Tab>
        <Tab
          key="Sexual Assault Certificate"
          title="Sexual Assault Certificate"
        >
          {/* <MedicoLegalForm /> */}
        </Tab>
      </Tabs>
    </div>
  );
}
