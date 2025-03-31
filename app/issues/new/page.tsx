"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Search the docs…">
        <TextField.Slot>
          <MagnifyingGlassIcon />
        </TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="input"/>
      <Button> Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
