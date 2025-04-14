import { Flex } from "@radix-ui/themes";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./LatestIssues";
import { prisma } from "@/prisma/client";
import IssueChart from "./components/IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  return (
    <Flex direction="column" gap="5">
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <LatestIssues />
      <IssueChart open={open} inProgress={inProgress} closed={closed} />
    </Flex>
  );
}
