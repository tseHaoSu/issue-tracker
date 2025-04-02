import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const LoadingIssueDetailPage = () => {
  return (
    <div>
      <Flex gap="3" align="center">
        <Heading>
          <Skeleton />
        </Heading>
        <Skeleton />
        <Text>
          <Skeleton />
        </Text>
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={5} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
