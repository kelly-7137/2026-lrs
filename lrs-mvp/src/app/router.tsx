import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ROLES } from '@/constants/roles';
import { useAuthContext } from '@/contexts/AuthContext';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { SignupPage } from '@/features/auth/pages/SignupPage';
import { AdminDashboard } from '@/features/admin/pages/AdminDashboard';
import { AdminUserPage } from '@/features/admin/pages/AdminUserPage';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { InstructorDashboard } from '@/features/instructor/pages/InstructorDashboard';
import { LectureDetailPage } from '@/features/instructor/pages/LectureDetailPage';
import { InstructorLayout } from '@/components/layout/InstructorLayout';
import { ReviewerDashboard } from '@/features/reviewer/pages/ReviewerDashboard';
import { ReviewDetailPage } from '@/features/reviewer/pages/ReviewDetailPage';
import { ReviewerLayout } from '@/components/layout/ReviewerLayout';

function RootRedirect() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const redirectMap: Record<string, string> = {
    admin: '/admin',
    instructor: '/instructor',
    reviewer: '/reviewer'
  };

  return <Navigate to={redirectMap[user.role] ?? '/login'} replace />;
}

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/unauthorized', element: <div>접근 권한이 없습니다.</div> },
  {
    element: <ProtectedRoute allowedRoles={[ROLES.ADMIN]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: '/admin', element: <AdminDashboard /> },
          { path: '/admin/users', element: <AdminUserPage /> }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute allowedRoles={[ROLES.INSTRUCTOR, ROLES.ADMIN]} />,
    children: [
      {
        element: <InstructorLayout />,
        children: [
          { path: '/instructor', element: <InstructorDashboard /> },
          { path: '/instructor/lectures/:id', element: <LectureDetailPage /> }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute allowedRoles={[ROLES.REVIEWER, ROLES.ADMIN]} />,
    children: [
      {
        element: <ReviewerLayout />,
        children: [
          { path: '/reviewer', element: <ReviewerDashboard /> },
          { path: '/reviewer/reviews/:id', element: <ReviewDetailPage /> }
        ]
      }
    ]
  },
  { path: '/', element: <RootRedirect /> },
  { path: '*', element: <div>404 - 페이지를 찾을 수 없습니다.</div> }
]);
