import { Link, Outlet } from 'react-router-dom';

export const InstructorLayout = () => {
  return (
    <main>
      <h1>Instructor</h1>
      <nav>
        <Link to="/instructor">Dashboard</Link>
      </nav>
      <Outlet />
    </main>
  );
};
