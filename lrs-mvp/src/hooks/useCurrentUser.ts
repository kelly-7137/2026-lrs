import { useAuthContext } from '@/contexts/AuthContext';

export const useCurrentUser = () => {
  const { user } = useAuthContext();
  return user;
};
