import { Button, Divider, Image } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
// import Link from "next/link";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/router";
const links = [
  { label: "Home", link: "/dashboard" },
  { label: "Police Surgeon Office", link: "/dashboard/police-surgeon-office" },
  { label: "ICCBS DNA Report", link: "/dashboard/iccbs-dna-department" },
  {
    label: "Police Forensic Report",
    link: "/dashboard/police-forensic-department",
  },
  {
    label: "Chemical Examination Department",
    link: "/dashboard/chemical-examination-department",
  },
  {
    label: "Logout",
    link: "/  ",
  },
];
export const Sidebar = () => {
  const router = useRouter();
  return (
    <Card className="h-full gap-4 rounded-none p-4">
      <div className=" flex flex-col gap-4 w-full justify-center items-center">
        <Image src="/logo.png" width={30} height={30} />
        <h4 className="font-semibold md:text-xs text-center">
          Police Case Managament System
        </h4>
      </div>
      <Divider />
      <div className=" gap-4 flex flex-col ">
        {links.map((link, index) => (
          <Button
            key={index}
            as={Link}
            href={link.link}
            variant="light"
            radius="sm"
            size="sm"
            className={link.link === router.pathname ? "bg-primary" : ""}
            // data-pressed
          >
            {link.label}
            {/* {router.pathname} */}
          </Button>
        ))}
      </div>
    </Card>
  );
};
