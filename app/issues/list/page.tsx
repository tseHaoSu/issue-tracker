import { prisma } from "@/prisma/client";
import { Status } from "@prisma/client";
import { Heading } from "@radix-ui/themes";
import IssueAction from "../_components/IssueAction";
import IssuesTable from "../_components/IssueTable";

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

  return (
    <div className="flex flex-col space-y-10">
      <IssueAction />
      <div className="mb-3">
        <Heading>Issues Table</Heading>
      </div>
      <IssuesTable
        issues={issues}
        status={status}
        orderBy={orderBy}
        direction={direction}
      />
    </div>
  );
};

export default IssuesPage;
