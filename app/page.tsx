import { getServerSession } from "next-auth";
import Tiptap from "./components/Tiptap";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <div>
      <Tiptap />
    </div>
  );
}
