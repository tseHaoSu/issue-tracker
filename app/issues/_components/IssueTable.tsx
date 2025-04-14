import { Issue, Status } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import IssueBadge from "../../components/IssueBadge";

interface IssuesTableProps {
  issues: Issue[];
  status?: Status;
  orderBy?: string;
  direction?: "asc" | "desc";
}

const IssuesTable = ({
  issues,
  status,
  orderBy,
  direction,
}: IssuesTableProps) => {
  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "ID", value: "id", className: "hidden md:table-cell" },
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.label}
              className={column.className}
            >
              <Link
                href={{
                  query: {
                    ...(status && { status }),
                    orderBy: column.value,
                    direction:
                      orderBy === column.value && direction === "asc"
                        ? "desc"
                        : "asc",
                  },
                }}
                className="flex items-center gap-1"
              >
                {column.label}
                {orderBy === column.value &&
                  (direction === "asc" ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowDown size={16} />
                  ))}
              </Link>
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell className="hidden md:table-cell">{issue.id}</Table.Cell>
            <Table.Cell>
              <Link
                href={`/issues/${issue.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {issue.title}
              </Link>
              <div className="block md:hidden">
                <IssueBadge status={issue.status} />
              </div>
              <div className="block md:hidden">
                {issue.createdAt.toDateString()}
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
