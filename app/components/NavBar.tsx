"use client";

import { Container, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gi3dHammer } from "react-icons/gi";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="border-b border-gray-300 px-4 py-5">
      <Container>
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
          <Dropdown />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
