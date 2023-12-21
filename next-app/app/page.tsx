import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link className="btn btn-link" href="/users">
        Users
      </Link>
    </main>
  );
}
