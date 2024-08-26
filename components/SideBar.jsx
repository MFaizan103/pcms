// components/Sidebar.js
import { siteConfig } from "@/config/site";
import { Button, CardHeader, Divider, Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const links = [
  { label: "Home", component: "home" },
  { label: "Medico Legal Certificate", component: "medico-legal-certificate" },
  { label: "DNA Report", component: "dna-report" },
  { label: "Forensic Report", component: "forensic-report" },
  {
    label: "Chemical Examiner Report",
    component: "chemical-examiner-report",
  },
];
export const Sidebar = ({ setActiveComponent }) => {
  return (
    <Card className="w-64 h-screen fixed p-4 flex flex-col rounded-none ">
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
            onClick={() => setActiveComponent(link.component)}
            key={index}
            color="default"
            variant="light"
            radius="md"
            size="lg"
            fullWidth
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
