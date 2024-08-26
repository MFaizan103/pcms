import React from "react";
import { Card } from "@nextui-org/react";

export const StatCard = ({ cardName, cases }) => {
  return (
    <Card className="min-w-[300px] h-32 p-4 flex flex-col gap-2 ">
      <p className="text-xl">{cardName}</p>
      <p className="text-2xl font-bold">{cases}</p>
    </Card>
  );
};
