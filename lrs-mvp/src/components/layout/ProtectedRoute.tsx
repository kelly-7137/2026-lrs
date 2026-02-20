import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth.types';
import { Spinner } from '@/components/ui/Spinner';

export const ProtectedRoute = ({ allowedRoles }: { allowedRoles?: UserRole[] }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};
