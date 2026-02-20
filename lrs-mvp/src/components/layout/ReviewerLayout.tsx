import { Link, Outlet } from 'react-router-dom';

export const ReviewerLayout = () => {
  return (
    <main>
      <h1>Reviewer</h1>
      <nav>
        <Link to="/reviewer">Dashboard</Link>
      </nav>
      <Outlet />
    </main>
  );
};
