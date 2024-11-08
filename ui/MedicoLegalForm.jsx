import { siteConfig } from "@/config/site";
import { Input, Textarea } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const MedicoLegalForm = () => {
  const initialDetails = [
    {
      type: "text",
      label: "ML",
      key: "ML",
    },
    {
      type: "date",
      label: "Date",
      key: "Date",
    },
    {
      type: "time",
      label: "Arrival Time",
      key: "Arrival Time",
    },
    {
      type: "select",
      label: "Police Station",
      options: [
        "Artillery Maidan Police Station",
        "Bahadurabad Police Station",
        "Boat Basin Police Station",
        "Clifton Police Station",
        "Defence Police Station",
        "Ferozabad Police Station",
        "Gulberg Police Station",
        "Gulshan-e-Iqbal Police Station",
        "Gulzar-e-Hijri Police Station",
        "Jamshed Quarters Police Station",
        "Korangi Industrial Area Police Station",
        "Malir City Police Station",
        "Mithadar Police Station",
        "New Karachi Police Station",
        "Orangi Town Police Station",
        "Paposh Nagar Police Station",
        "Shah Faisal Colony Police Station",
        "Sharae Faisal Police Station",
        "Soldier Bazaar Police Station",
        "Surjani Town Police Station",
        "Karachi South Police Station",
        "Karachi East Police Station",
        "Karachi West Police Station",
        "Karachi Central Police Station",
        "Korangi Police Station",
        "Gulshan-e-Maymar Police Station",
        "North Karachi Police Station",
        "Kharadar Police Station",
        "Lyari Police Station",
        "Mochko Police Station",
        "Malir Police Station",
        "Baldia Town Police Station",
        "Keamari Police Station",
        "Landhi Police Station",
        "Korangi Creek Police Station",
        "Nazimabad Police Station",
        "Nishtar Park Police Station",
        "Shaheed-e-Millat Police Station",
        "Tariq Road Police Station",
        "Zaman Town Police Station",
      ],
    },
    {
      type: "text",
      label: "F.I.R",
      key: "F.I.R",
    },
    {
      type: "text",
      label: "Entry",
      key: "Entry",
    },
    {
      type: "text",
      label: "Markst of Identification",
      key: "Marks of Identificaiton",
    },
    {
      type: "text",
      label: "Consent for Examination",
      key: "Consent for Examination",
    },
    {
      type: "text",
      label: "Examination done in the presence of",
      key: "Examination done in the presence of",
    },
  ];

  const investigationsAdvised = [
    { type: "text", key: "X-Ray", label: "X-Ray" },
    { type: "text", key: "U/S: Abdomen/Pelvis", label: "U/S: Abdomen/Pelvis" },
    { type: "text", key: "CT Scan", label: "CT Scan" },
    { type: "text", key: "Blood Sample", label: "Blood Sample" },
    { type: "text", key: "Urine Sample", label: "Urine Sample" },
    { type: "text", key: "Gastric Lavage", label: "Gastric Lavage" },
    { type: "text", key: "Other", label: "Other" },
    { type: "text", key: "Referal to", label: "Referal to" },
    { type: "text", key: "Disoisal to MLC", label: "Disposal to MLC" },
    { type: "text", key: "---ginal", label: "---ginal" },
    { type: "text", key: "---oy", label: "---oy" },
  ];

  const detailsOfVictim = [
    { type: "text", label: "Name" },
    { type: "text", label: "S/o. D/o. W/o" },
    { type: "text", label: "Age" },
    { type: "text", label: "Occupation" },
    {
      type: "select",
      label: "Marital Status",
      options: ["Single", "Married", "Widow"],
    },
    { type: "text", label: "Education" },
    { type: "textarea", label: "Address", placeholder: "Enter Address" },
    { type: "text", label: "ER Slip with Time" },
    { type: "textarea", label: "Place of Incident" },
    { type: "date", label: "Date of M.L Examination" },
    { type: "time", label: "Time of M.L Examination" },
    { type: "text", label: "Brought/Accompanied By" },
    { type: "text", label: "Relation" },
    { type: "text", label: "Cell" },
    { type: "select", label: "WPI (Yes or No):", options: ["Yes", "No"] },
    { type: "date", label: "WPI Date:" },
    {
      type: "select",
      label: "History:",
      options: [
        "Alleged Assault",
        "Intoxication",
        "RTA",
        "Ingestion of Poison",
        " Fall",
        "Fire Burns",
        "Acid Burns",
        "Gunshot",
        " Any other",
      ],
    },
    { type: "textarea", label: "If Any Other" },
    {
      type: "select",
      label: "As per the Statement of:",
      options: ["Injured", "Attendent", "Ambulance Driver", "CMO"],
    },
    { type: "textarea", label: "If you have selected CMO enter details here" },
    {
      type: "select",
      label: "General Condition:",
      options: [
        "Concious",
        "Unconcious",
        "Semiconcious",
        "Mobile",
        "Immboile",
        "Oriented",
        "Disoriented",
        "Cooperative",
        "Non-Cooperative",
        "Aggressive",
        "Non-Aggressive",
        "Talkative",
        "Quiet",
        "Physically Stable",
        "Physically Unstable",
        "Normal",
        "Abnormal",
        "Drunk",
      ],
    },
    { type: "text", label: "Breath Smell" },
    { type: "text", label: "GCS/15" },
    { type: "text", label: "B.P" },
    { type: "text", label: "Pulse" },
    { type: "text", label: "R.R" },
    {
      type: "select",
      label: "Pupils:",
      options: [
        "Reactive",
        "Non-Reactive",
        "Dilated",
        "Pinpoint",
        "Constricted",
      ],
    },
    {
      type: "select",
      label: "Description of Clothes:",
      options: ["Color", "Tears", "Stains"],
    },
    {
      type: "textarea",
      label: "Injuries:",
    },
    {
      type: "textarea",
      label: "Sample Taken:",
    },
    {
      type: "text",
      label: "Sealed and Handed over to:",
    },
    {
      type: "textarea",
      label: "OPINION: Nature of Injuries:",
    },
    {
      type: "text",
      label: "Duration of Injuries:",
    },
    {
      type: "text",
      label: "Kind of Weapon:",
    },
  ];

  return (
    <>
      <form
        action=""
        className=" mb-24 flex flex-col gap-8 justify-center items-center"
      >
        <div className="flex flex-col">
          <h1 className="text-lg mb-4 font-bold ">Enter Initial Details</h1>
          <div className="flex flex-col flex-1 flex-wrap  gap-4">
            {/* INITIAL DETAILS */}
            {initialDetails.map((field, index) => {
              switch (field.type) {
                case "text":
                case "date":
                case "time":
                  return (
                    <Input
                      key={index}
                      type={field.type}
                      label={field.label}
                      size="md"
                      className="w-96"
                    />
                  );

                case "textarea":
                  return (
                    <Textarea
                      key={index}
                      label={field.label}
                      size="md"
                      className="w-96"
                      placeholder={field.placeholder}
                    />
                  );
                case "select":
                  return (
                    <Select
                      key={index}
                      label={field.label}
                      size="md"
                      className="w-96"
                    >
                      {field.options.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </Select>
                  );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col ">
          <h1 className="text-lg mb-4 font-bold text-start mr-4">
            Investigation Advised
          </h1>
          <div className="flex flex-1 flex-col flex-wrap gap-4 ">
            {/* INVESTIGATION ADVISED */}
            {investigationsAdvised.map((field, index) => {
              switch (field.type) {
                case "text":
                case "date":
                case "time":
                  return (
                    <Input
                      key={index}
                      type={field.type}
                      label={field.label}
                      size="md"
                      className="w-96"
                    />
                  );

                case "textarea":
                  return (
                    <Textarea
                      key={index}
                      label={field.label}
                      size="md"
                      className="w-96"
                      placeholder={field.placeholder}
                    />
                  );
                case "select":
                  return (
                    <Select
                      key={index}
                      label={field.label}
                      size="md"
                      className="w-96"
                    >
                      {field.options.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </Select>
                  );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg mb-4 font-bold">Details of Victim</h1>
          <div className="flex flex-1 flex-col flex-wrap gap-4">
            {/* Details of Victim */}
            {detailsOfVictim.map((field, index) => {
              switch (field.type) {
                case "text":
                case "date":
                case "time":
                  return (
                    <Input
                      key={index}
                      type={field.type}
                      label={field.label}
                      size="md"
                      className="w-96"
                    />
                  );

                case "textarea":
                  return (
                    <Textarea
                      key={index}
                      label={field.label}
                      size="md"
                      className="w-96"
                      placeholder={field.placeholder}
                    />
                  );
                case "select":
                  return (
                    <Select
                      key={index}
                      label={field.label}
                      size="md"
                      className="w-96"
                    >
                      {field.options.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </Select>
                  );
              }
            })}
          </div>
        </div>
        <Button
          fullWidth
          as={Link}
          color="primary"
          href={siteConfig.links.dashboard}
          radius="md"
          size="lg"
          variant="shadow"
          className="w-96"
        >
          Add Report
        </Button>
      </form>
    </>
  );
};

export { MedicoLegalForm };
