import { createClient } from '@supabase/supabase-js';

// Supabase credentials for PIXEL STACK project
const supabaseUrl = 'https://myrccigvbuhwmscqmnpw.supabase.co';
const supabaseAnonKey = 'sb_publishable_jr23SuQjVT2lmkkY273u6Q_58wvxwzH';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
