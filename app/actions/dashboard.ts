"use server";

import { createClient } from "@/utils/supabase/server";

export async function getDashboardMetrics() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      revenueTotal: 0,
      pixToday: 0,
      totalOrders: 0,
      profitTotal: 0,
    };
  }

  // Pegar faturamento PIX (aprovados)
  const { data: pixData } = await supabase
    .from("pix_transactions")
    .select("amount, status, received_at")
    .eq("user_id", user.id)
    .eq("status", "approved");

  let pixToday = 0;
  let revenueTotal = 0;
  let totalOrders = 0;

  if (pixData) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    pixData.forEach((tx: any) => {
      const txDate = new Date(tx.received_at);
      revenueTotal += Number(tx.amount);
      totalOrders += 1;
      if (txDate >= today) {
        pixToday += Number(tx.amount);
      }
    });
  }

  // Pegar custos dos produtos (apenas para cálculo genérico se quisermos)
  // Para fins reais, lucro vem de (Receita - Custos Operacionais).
  // Sem tabela de orders complexa, vamos fixar o lucro como 30% da receita para simular no momento
  const profitTotal = revenueTotal * 0.3;

  return {
    revenueTotal,
    pixToday,
    totalOrders,
    profitTotal,
  };
}
