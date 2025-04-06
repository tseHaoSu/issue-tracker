import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueAction = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new" style={{ textDecoration: "none" }}>
          New Issue
        </Link>
      </Button>
    </div>
  );
};

export default IssueAction;
