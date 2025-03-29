import Link from "next/link";
import React from "react";
import { Gi3dHammer } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { label: "Dashbaord", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex flex-row space-x-4 border-b border-gray-300 p-4 items-center">
      <Gi3dHammer className="text-blue-500 text-2xl" />
      <Link href="/" className="font-bold ">
        IssueTracker
      </Link>
      <ul className="flex flex-row space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
