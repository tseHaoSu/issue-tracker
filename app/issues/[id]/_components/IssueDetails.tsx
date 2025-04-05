import IssueBadge from "@/app/components/IssueBadge";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

// prose: designed for content that is meant to be read, such as articles, blog posts, and documentation. It provides a clean and readable layout with appropriate font sizes, line heights, and spacing for text-heavy content.

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Flex gap="3" align="center">
        <Heading>{issue.title}</Heading>
        <IssueBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose mt-4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
