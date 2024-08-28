import { DashBoardTable } from "../../../ui/dashboard/table/DashBoardTable";
import { StatCard } from "../../../ui/dashboard/card/Card";
import { columns, reports, statusOptions } from "../../../config/medicoLegalData";
import DashBoardLayout from "../layout";

const cases = [
  { name: "Active Cases", cases: 45 },
  { name: "Pending Cases", cases: 50 },
  { name: "Completed Cases", cases: 20 },
  { name: "Total Cases", cases: 110 },
];

const PoliceForensicDepartment = () => {
  return (
    <DashBoardLayout>
      <div className="w-full">
        <h1 className="text-xl font-bold my-4">Police Forensic Department</h1>

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
            showAddButton={true}
            columns={columns}
            reports={reports}
            statusOptions={statusOptions}
          />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default PoliceForensicDepartment;
