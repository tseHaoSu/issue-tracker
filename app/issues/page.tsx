import { nacbar} from "@/prisma/client";
import { Heading, Table } from "@radix-ui/themes";
import IssueBadge from "../components/IssueBadge";
import Link from "../components/Link";
import IssueAction from "./_components/IssueAction";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="flex flex-col space-y-10">
      <IssueAction />
      <div className="mb-3">
        <Heading>Issues Table</Heading>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Issue ID
            </Table.ColumnHeaderCell>
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
              <Table.Cell className="hidden md:table-cell">
                {issue.id}
              </Table.Cell>
              <Table.Cell>
                <Link
                  href={`/issues/${issue.id}`}
                  className="hover:text-sky-700"
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
