import { AuthUser } from '@/types/auth.types';
import { supabase } from './supabase';

export const authService = {
  async getCurrentUserWithRole(): Promise<AuthUser | null> {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();

    return {
      id: user.id,
      email: user.email ?? '',
      role: (profile?.role ?? 'reviewer') as AuthUser['role']
    };
  },

  async signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
};
