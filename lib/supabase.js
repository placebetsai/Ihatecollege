import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function createDisabledSupabaseClient() {
  const disabledError = {
    message: 'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.',
  };

  const auth = {
    async getSession() {
      return { data: { session: null }, error: disabledError };
    },
    onAuthStateChange() {
      return {
        data: {
          subscription: {
            unsubscribe() {},
          },
        },
      };
    },
    async signOut() {
      return { error: null };
    },
    async signInWithPassword() {
      return { data: null, error: disabledError };
    },
    async signUp() {
      return { data: null, error: disabledError };
    },
    async resetPasswordForEmail() {
      return { data: null, error: disabledError };
    },
  };

  return {
    auth,
    from() {
      return {
        select() {
          return {
            eq() {
              return {
                async single() {
                  return { data: null, error: disabledError };
                },
              };
            },
          };
        },
      };
    },
  };
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createDisabledSupabaseClient();
