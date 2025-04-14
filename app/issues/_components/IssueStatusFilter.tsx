"use client";

import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const statuses: { label: string; value?: string }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();

  return (
    <Select.Root
      defaultValue="all"
      onValueChange={(status) => {
        const query = status && status !== "all" ? `?status=${status}` : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter" />
      <Select.Content>
        <Select.Item value="all">All</Select.Item>
        {statuses
          .filter((s) => s.value)
          .map((status) => (
            <Select.Item key={status.label} value={status.value!}>
              {status.label}
            </Select.Item>
          ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
