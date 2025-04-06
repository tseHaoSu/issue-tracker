"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Gi3dHammer } from "react-icons/gi";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box, Button, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboad", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className=" border-b border-gray-300 px-4 py-5">
      <Flex justify="between">
        <Flex align="center" gap="3">
          <Gi3dHammer className="text-blue-500 text-2xl" />
          <Link href="/" className="font-bold">
            IssueTracker
          </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classNames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "font-bold": link.href === currentPath,
                  })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Box>
          <Button
            variant="ghost"
            size="2"
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {status === "authenticated" ? (
              <Link
                href="/auth/signout"
                className="text-red-500 hover:text-red-600"
              >
                Sign Out
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                className="text-blue-500 hover:text-blue-600"
              >
                Sign In
              </Link>
            )}
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
