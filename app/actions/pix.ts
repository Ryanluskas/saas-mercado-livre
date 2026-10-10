'use server';

import { createClient } from '@supabase/supabase-js';

// Usamos Service Role para teste temporário até haver login real
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getPixTransactions() {
  const { data, error } = await supabase
    .from('pix_transactions')
    .select('*')
    .order('received_at', { ascending: false })
    .limit(50);
    
  if (error) {
    console.error("Erro ao buscar transações PIX:", error);
    return [];
  }
  
  return data || [];
}
