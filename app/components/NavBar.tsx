"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Gi3dHammer } from "react-icons/gi";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: "Dashboad", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex flex-row space-x-4 border-b border-gray-300 p-4 items-center">
      <Gi3dHammer className="text-blue-500 text-2xl" />
      <Link href="/" className="font-bold">
        IssueTracker
      </Link>
      <ul className="flex flex-row space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "font-bold": link.href === currentPath,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
