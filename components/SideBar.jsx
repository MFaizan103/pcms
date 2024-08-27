// components/Sidebar.js
import { Button, CardHeader, Divider, Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const links = [
  { label: "Home", component: "home" },
  { label: "Police Surgeon Office", component: "police-surgeon-office" },
  { label: "ICCBS DNA Report", component: "iccbs-dna-department" },
  { label: "Police Forensic Report", component: "police-forensic-department" },
  {
    label: "Chemical Examination Department",
    component: "chemical-examination-department",
  },
];
export const Sidebar = ({ activeComponent, setActiveComponent }) => {
  return (
    <Card className="w-2/12 h-screen fixed p-4 flex flex-col rounded-none ">
      <CardHeader className=" flex flex-col pb-0 pt-2 px-4 gap-4 justify-center items-center mb-4 ">
        <Image src="logo.png" width={50} />
        <h4 className="font-bold text-large text-center">
          Police Case Managament System
        </h4>
      </CardHeader>
      <Divider />
      <CardBody className=" gap-4 flex flex-col justify-start mt-16">
        {links.map((link, index) => (
          <Button
            onPress={() => setActiveComponent(link.component)}
            key={index}
            color="default"
            variant="light"
            radius="md"
            size="lg"
            fullWidth
            className={
              link.component === activeComponent && " bg-black text-white"
            }
            data-pressed
          >
            {link.label}
          </Button>
        ))}
        <Button
          as={Link}
          color="default"
          variant="light"
          radius="md"
          href="/"
          size="lg"
          fullWidth
        >
          Logout
        </Button>
      </CardBody>
    </Card>
  );
};
