import { Avatar, Box, Button, DropdownMenu, Skeleton } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Dropdown = () => {
  const { status, data: session } = useSession();

  if(status === "loading") return <Skeleton width="3rem"/>;
  if(status === "unauthenticated") return null;

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
            <Link href="/auth/signout">
              <DropdownMenu.Item color="red">Sign Out</DropdownMenu.Item>
            </Link>
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
