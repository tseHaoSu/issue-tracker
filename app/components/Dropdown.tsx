import { Box, DropdownMenu, Button, Avatar } from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Dropdown = () => {
  const { status, data: session } = useSession();
  return (
    <Box>
      {status === "authenticated" ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost" className="p-0">
              <Avatar
                size="2"
                src={session?.user?.image || "/default-avatar.png"}
                alt="User Avatar"
                fallback="?"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              {session?.user?.name || "User"}
            </DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item
              color="red"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      ) : (
        <Link href="/auth/signin" className="text-blue-500 hover:text-blue-600">
          Sign In
        </Link>
      )}
    </Box>
  );
};

export default Dropdown;
