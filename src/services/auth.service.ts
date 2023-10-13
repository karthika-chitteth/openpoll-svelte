import { supabase } from './supabaseClient';

export namespace AuthService {
  export const getSession = async () => {
    return supabase.auth.getSession();
  };
}
