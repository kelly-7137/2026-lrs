export type UserRole = 'admin' | 'instructor' | 'reviewer';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}
