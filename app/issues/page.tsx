import { prisma } from "@/prisma/client";
import { Button, Heading, Link, Table } from "@radix-ui/themes";
import React from "react";
import IssueBadge from "../components/IssueBadge";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div className="flex flex-col space-y-10">
      <div>
        <Button>
          <Link href="/issues/new" style={{ textDecoration: "none" }}>
            New Issue
          </Link>
        </Button>
      </div>
      <div className="mb-3">
        <Heading>Issues Table</Heading>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Group
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className="block md:hidden">{issue.status}</div>
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
