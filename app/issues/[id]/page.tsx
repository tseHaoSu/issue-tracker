import React from "react";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueBadge from "@/app/components/IssueBadge";
import ReactMarkdown from "react-markdown";
import delay from "delay";

interface Props {
  params: {
    id: string;
  };
}
const page = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) {
    notFound();
  }

  return (
    <div>
      <Flex gap="3" align="center">
        <Heading>{issue.title}</Heading>
        <IssueBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose mt-4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default page;
