import React from "react";
import { Card } from "@nextui-org/react";

export const StatCard = ({ cardName, cases }) => {
  return (
    <Card className=" h-32 p-4 flex flex-1 flex-col ">
      <p className="text-md">{cardName}</p>
      <p className="text-xl font-bold">{cases}</p>
    </Card>
  );
};
