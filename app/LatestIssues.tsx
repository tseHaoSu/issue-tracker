import { Avatar, Box, Heading, Table, Text } from "@radix-ui/themes";
import { prisma } from "@/prisma/client";
import Link from "next/link";
import IssueBadge from "./components/IssueBadge";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { assignedToUser: true },
  });

  return (
    <Box className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Box className="p-4">
        <Heading size="4" className="text-gray-800">
          Latest Issues
        </Heading>
      </Box>
      <Table.Root variant="surface">
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row
              key={issue.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <Table.Cell className="p-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <Link
                      href={`/issues/${issue.id}`}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-lg"
                    >
                      {issue.title}
                    </Link>
                    <div className="flex items-center gap-3 mt-2">
                      <IssueBadge status={issue.status} />
                      <Text size="2" className="text-gray-500">
                        {new Date(issue.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Text>
                    </div>
                  </div>

                  {issue.assignedToUser && (
                    <div className="flex items-center gap-2">
                      <div className="text-right hidden sm:block">
                        <Text size="2" className="text-gray-500">
                          Assigned to {""}
                        </Text>
                        <Text className="font-medium">
                          {issue.assignedToUser.name}
                        </Text>
                      </div>
                      <Avatar
                        src={issue.assignedToUser.image ?? ""}
                        alt={`${issue.assignedToUser.name}'s avatar`}
                        fallback={issue.assignedToUser.name?.[0] || "U"}
                        size="3"
                        radius="full"
                        className="border-2 border-white shadow-sm"
                      />
                    </div>
                  )}

                  {!issue.assignedToUser && (
                    <div className="flex items-center gap-2">
                      <Text size="2" className="text-gray-400 italic">
                        Unassigned
                      </Text>
                    </div>
                  )}
                </div>
              </Table.Cell>
            </Table.Row>
          ))}

          {issues.length === 0 && (
            <Table.Row>
              <Table.Cell className="p-4 text-center text-gray-500">
                No issues found
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default LatestIssues;
