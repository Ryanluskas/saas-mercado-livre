import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Produto = {
  id: string;
  nome: string;
  sku: string;
  fornecedor: string;
  custo: number;
  precoVenda: number;
  estoque: "Baixo" | "Adequado" | "Esgotado";
  status: "Ativo" | "Em validação" | "Pausado";
  imagem: string;
};

type AppState = {
  produtos: Produto[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: string) => void;
  atualizarProduto: (id: string, updates: Partial<Produto>) => void;
};

const produtosIniciais: Produto[] = [
  {
    id: "1",
    nome: "Smartwatch Y68 D20 Bluetooth Inteligente",
    sku: "Y68-PRETO",
    fornecedor: "Atacado BR",
    custo: 25.5,
    precoVenda: 79.9,
    estoque: "Baixo",
    status: "Ativo",
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    nome: "Fone de Ouvido Bluetooth TWS F9-5",
    sku: "F9-5-PRETO",
    fornecedor: "TechDrop",
    custo: 32.0,
    precoVenda: 95.0,
    estoque: "Adequado",
    status: "Em validação",
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    nome: "Mini Liquidificador Portátil Shake 380ml",
    sku: "LIQ-MINI-ROSA",
    fornecedor: "Casa & Co",
    custo: 45.0,
    precoVenda: 120.0,
    estoque: "Esgotado",
    status: "Pausado",
    imagem: "https://via.placeholder.com/150",
  },
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      produtos: produtosIniciais,
      adicionarProduto: (produto) =>
        set((state) => ({ produtos: [...state.produtos, produto] })),
      removerProduto: (id) =>
        set((state) => ({
          produtos: state.produtos.filter((p) => p.id !== id),
        })),
      atualizarProduto: (id, updates) =>
        set((state) => ({
          produtos: state.produtos.map((p) =>
            p.id === id ? { ...p, ...updates } : p,
          ),
        })),
    }),
    {
      name: "venda-ia-storage",
    },
  ),
);
