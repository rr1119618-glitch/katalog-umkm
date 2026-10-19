import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Koneksi Supabase di sisi server untuk pengunjung (akses publik).
 * Menggunakan SUPABASE_URL dan SUPABASE_SECRET_KEY agar dapat membaca data katalog
 * yang terlindungi oleh Row Level Security (RLS).
 */
export function createServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "SUPABASE_URL atau SUPABASE_SECRET_KEY belum diatur di environment variable."
    );
  }

  return createSupabaseClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export { createServerClient as createClient };

