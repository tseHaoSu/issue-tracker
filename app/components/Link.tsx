import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
  className?: string;
}

const Link = ({ href, children, className }: Props) => {
  return (
    <NextLink href={href} legacyBehavior passHref className={className}>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
