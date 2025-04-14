import { Status } from "@prisma/client";
import React from "react";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueBadge;
