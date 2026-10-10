import { Package, Search, Plus, Filter, MoreVertical, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function ProdutosPage() {
  const produtos = [
    {
      id: "1",
      nome: "Smartwatch Y68 D20 Bluetooth Inteligente",
      sku: "Y68-PRETO",
      fornecedor: "Atacado BR",
      custo: 25.50,
      precoVenda: 79.90,
      estoque: "Baixo",
      status: "Ativo",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      nome: "Fone de Ouvido Bluetooth TWS F9-5",
      sku: "F9-5-PRETO",
      fornecedor: "TechDrop",
      custo: 32.00,
      precoVenda: 95.00,
      estoque: "Adequado",
      status: "Em validação",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      nome: "Mini Liquidificador Portátil Shake 380ml",
      sku: "LIQ-MINI-ROSA",
      fornecedor: "Casa & Co",
      custo: 45.00,
      precoVenda: 120.00,
      estoque: "Esgotado",
      status: "Pausado",
      imagem: "https://via.placeholder.com/150",
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <Package className="text-primary" size={28} />
            Catálogo de Produtos
          </h1>
          <p className="text-zinc-400 mt-1">Gerencie seu portfólio, defina preços e acompanhe o estoque nos fornecedores.</p>
        </div>
        <Button className="bg-primary text-white hover:bg-emerald-600 gap-2">
          <Plus size={16} /> Adicionar Produto
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-card p-4 rounded-xl border border-zinc-800">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <Input 
            placeholder="Buscar por nome ou SKU..." 
            className="pl-9 bg-zinc-900 border-zinc-700 w-full focus-visible:ring-primary"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="border-zinc-700 text-zinc-300 w-full sm:w-auto gap-2 hover:bg-zinc-800">
            <Filter size={16} /> Filtros
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {produtos.map((produto) => (
          <Card key={produto.id} className="bg-zinc-950/50 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-center p-4 gap-6">
                
                {/* Imagem Placeholder */}
                <div className="h-20 w-20 rounded-md bg-zinc-800 shrink-0 flex items-center justify-center border border-zinc-700 text-zinc-600">
                  <Package size={24} />
                </div>
                
                {/* Infos principais */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-zinc-200 truncate">{produto.nome}</h3>
                    {produto.status === "Ativo" && (
                       <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-green-500/10 text-green-500 border border-green-500/20">Ativo</span>
                    )}
                    {produto.status === "Em validação" && (
                       <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">Em Validação</span>
                    )}
                    {produto.status === "Pausado" && (
                       <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-zinc-800 text-zinc-400 border border-zinc-700">Pausado</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">SKU: <span className="text-zinc-400">{produto.sku}</span></span>
                    <span className="hidden sm:inline">&bull;</span>
                    <span className="flex items-center gap-1">Fornecedor: <span className="text-zinc-400">{produto.fornecedor}</span></span>
                  </div>
                </div>

                {/* Preços */}
                <div className="flex flex-row sm:flex-col gap-4 sm:gap-1 text-sm sm:text-right shrink-0">
                   <div>
                      <span className="text-zinc-500 mr-2 sm:hidden">Custo:</span>
                      <span className="text-zinc-400">R$ {produto.custo.toFixed(2)}</span>
                   </div>
                   <div>
                      <span className="text-zinc-500 mr-2 sm:hidden">Venda:</span>
                      <span className="font-medium text-white">R$ {produto.precoVenda.toFixed(2)}</span>
                   </div>
                </div>

                {/* Estoque */}
                <div className="shrink-0 w-32 flex flex-col items-start sm:items-end gap-1">
                   {produto.estoque === "Adequado" && <span className="text-sm text-green-500">Estoque OK</span>}
                   {produto.estoque === "Baixo" && <span className="text-sm text-yellow-500">Estoque Baixo</span>}
                   {produto.estoque === "Esgotado" && <span className="text-sm text-red-500">Esgotado</span>}
                </div>

                {/* Ações */}
                <div className="shrink-0 flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white" title="Abrir Anúncio">
                    <ExternalLink size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                    <MoreVertical size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
