import Link from "next/link";
import React from "react";
interface Users {
  id: number;
  name: string;
  email: string;
}

const UsersTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();

  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Eamil</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
