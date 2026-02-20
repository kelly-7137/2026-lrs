import { UserTable } from '../components/UserTable';
import { RoleManager } from '../components/RoleManager';
import { useAdminUsers } from '../hooks/useAdminUsers';

export const AdminUserPage = () => {
  const { users, loading } = useAdminUsers();

  if (loading) return <div>로딩 중...</div>;

  return (
    <section>
      <h2>유저 관리</h2>
      <RoleManager />
      <UserTable users={users} />
    </section>
  );
};
