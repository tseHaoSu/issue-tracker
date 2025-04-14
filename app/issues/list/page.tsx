import { prisma } from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { Heading, Table } from "@radix-ui/themes";
import IssueBadge from "../../components/IssueBadge";
import Link from "next/link";
import IssueAction from "../_components/IssueAction";
import { ArrowDown, ArrowUp } from "lucide-react";

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy?: string;
    direction?: "asc" | "desc";
  }>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy, direction } = await searchParams;
  const issues = await prisma.issue.findMany({
    where: {
      status: status || undefined,
    },
    orderBy: orderBy
      ? {
          [orderBy]: direction || "asc",
        }
      : undefined,
  });

  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "ID", value: "id", className: "hidden md:table-cell" },
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

  return (
    <div className="flex flex-col space-y-10">
      <IssueAction />
      <div className="mb-3">
        <Heading>Issues Table</Heading>
      </div>
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
              <Table.Cell className="hidden md:table-cell">
                {issue.id}
              </Table.Cell>
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
    </div>
  );
};

export default IssuesPage;
