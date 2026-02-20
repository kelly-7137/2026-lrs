export const UserTable = ({ users }: { users: Array<{ id: string; email: string; role: string }> }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
