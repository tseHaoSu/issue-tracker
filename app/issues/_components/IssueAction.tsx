import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueAction = () => {
  return (
    <Flex mb="5" justify="start" gap="5">
      <IssueStatusFilter />
      <Button>
        <Link href="/issues/new" style={{ textDecoration: "none" }}>
          New Issue
        </Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
