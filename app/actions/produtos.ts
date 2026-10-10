"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getProdutos() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }

  return data;
}

export async function adicionarProduto(formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Não autorizado");

  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const cost = Number(formData.get("cost"));
  const margin = Number(formData.get("margin"));

  const { error } = await supabase.from("products").insert({
    user_id: user.id,
    name,
    price,
    stock,
    cost,
    margin,
  });

  if (error) {
    throw new Error("Erro ao salvar produto no Supabase");
  }

  revalidatePath("/dashboard/produtos");
}

export async function removerProduto(id: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Não autorizado");

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    throw new Error("Erro ao excluir produto");
  }

  revalidatePath("/dashboard/produtos");
}
