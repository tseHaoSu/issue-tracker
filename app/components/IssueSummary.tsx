import { Status } from "@prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const statuses: {
    label: string;
    value: number;
    status: Status;
    color: string;
  }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
      color: "bg-red-50 border-red-200 text-red-700",
    },
    {
      label: "In Progress",
      value: inProgress,
      status: "IN_PROGRESS",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
      color: "bg-green-50 border-green-200 text-green-700",
    },
  ];

  return (
    <Flex direction="column" gap="4">
      <Box className="p-4 bg-gray-50 border-b border-gray-200">
        <Heading size="4" className="text-gray-800">
          Issue Summary
        </Heading>
      </Box>
      <Flex gap="4" wrap="wrap">
        {statuses.map((status) => (
          <Link
            key={status.label}
            href={`/issues/list?status=${status.status}`}
            className="flex-1 min-w-[180px]"
          >
            <Card
              className={`border shadow-sm hover:shadow-md transition-shadow duration-200 ${
                status.color.includes("border")
                  ? "border-" + status.color.split("border-")[1].split(" ")[0]
                  : "border-gray-200"
              }`}
            >
              <Box
                className={`p-4 rounded-t-lg ${
                  status.color.includes("bg-")
                    ? status.color.split("bg-")[1].split(" ")[0]
                    : "bg-gray-50"
                } border-b border-gray-200`}
              >
                <Text size="2" className="font-medium">
                  {status.label}
                </Text>
              </Box>
              <Box className="p-6 flex justify-center items-center">
                <Text
                  size="8"
                  className={`font-bold ${
                    status.color.includes("text-")
                      ? status.color.split("text-")[1].split(" ")[0]
                      : "text-gray-800"
                  }`}
                >
                  {status.value}
                </Text>
              </Box>
            </Card>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default IssueSummary;
