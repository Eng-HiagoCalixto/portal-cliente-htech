import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Inicializa o cliente do Supabase para usarmos em todo o sistema
export const supabase = createClient(supabaseUrl, supabaseAnonKey);