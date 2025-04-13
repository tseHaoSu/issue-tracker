import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./_components/EditIssueButton";
import IssueDetails from "./_components/IssueDetails";
import DeleteIssueButton from "./_components/DeleteIssueButton";
import AssignSelect from "./_components/AssignSelect";

const IssuesPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    notFound();
  }

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="5">
          <AssignSelect/>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

// export const dynamic = "force-dynamic";
// Force revalidation on every request
//or export const revalidate = 30; // Revalidate every 30 seconds

export default IssuesPage;
