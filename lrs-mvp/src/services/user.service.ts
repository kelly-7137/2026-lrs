import { supabase } from './supabase';

export const userService = {
  async listUsers() {
    const { data, error } = await supabase.from('profiles').select('id, email, role').order('email');
    if (error) throw new Error(error.message);
    return data ?? [];
  }
};
