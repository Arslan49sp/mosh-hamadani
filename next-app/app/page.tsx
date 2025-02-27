import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <button className="btn btn-primary ">Button</button>
    </main>
  );
}
