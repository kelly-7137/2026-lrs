import { Link, Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <main>
      <h1>Admin</h1>
      <nav>
        <Link to="/admin">Dashboard</Link> | <Link to="/admin/users">Users</Link>
      </nav>
      <Outlet />
    </main>
  );
};
