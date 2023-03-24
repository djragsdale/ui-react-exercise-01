import { Spinner } from "@blueprintjs/core";

import type { User } from "../types/User";

type UserListProps = {
  isLoading?: boolean;
  onEditUser?: (user: User) => void;
  users?: User[];
};

export const UserList = ({ isLoading, onEditUser, users }: UserListProps) => {
  if (isLoading) {
    return <Spinner intent="primary" size={100} />;
  }

  if (!users) {
    return <p>There are no users to be displayed.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Role</th>
          {onEditUser && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.idUser + user.profile.firstName}>
            <td>{user.idUser}</td>
            <td>{user.profile.firstName}</td>
            <td>{user.profile.lastName}</td>
            <td>{user.role}</td>
            {onEditUser && (
              <td>
                <button onClick={() => onEditUser(user)}>Edit role</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
