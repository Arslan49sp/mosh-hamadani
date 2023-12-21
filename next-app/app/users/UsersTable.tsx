import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";
interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();

  const sortedUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-link" href="/">
        Go back
      </Link>
    </>
  );
};

export default UsersTable;
