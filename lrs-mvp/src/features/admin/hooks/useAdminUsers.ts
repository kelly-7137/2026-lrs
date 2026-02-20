import { useEffect, useState } from 'react';
import { userService } from '@/services/user.service';

type AdminUser = { id: string; email: string; role: string };

export const useAdminUsers = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService
      .listUsers()
      .then((data) => {
        setUsers((data as AdminUser[]) ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
};
