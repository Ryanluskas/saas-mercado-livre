import {
  Package,
  Search,
  Plus,
  Filter,
  MoreVertical,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  getProdutos,
  adicionarProduto,
  removerProduto,
} from "@/app/actions/produtos";

export default async function ProdutosPage() {
  const produtos = await getProdutos();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Package className="text-primary" size={28} />
            Catálogo de Produtos
          </h1>
          <p className="text-muted mt-1">
            Gerencie seu portfólio, defina preços e acompanhe o estoque.
          </p>
        </div>

        <form action={adicionarProduto}>
          <input
            type="hidden"
            name="name"
            value={`Produto Simulado #${Math.floor(Math.random() * 1000)}`}
          />
          <input type="hidden" name="price" value="150" />
          <input type="hidden" name="cost" value="50" />
          <input type="hidden" name="stock" value="100" />
          <input type="hidden" name="margin" value="45" />
          <Button
            type="submit"
            className="bg-primary text-foreground hover:bg-emerald-600 gap-2 font-bold"
          >
            <Plus size={16} /> Adicionar Teste no BD
          </Button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-background-secondary/50 p-4 rounded-xl border border-border">
        <div className="relative w-full sm:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            size={16}
          />
          <Input
            placeholder="Buscar..."
            className="pl-9 bg-background border-border w-full focus-visible:ring-emerald-500 text-foreground"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {!produtos || produtos.length === 0 ? (
          <div className="text-center p-8 border border-dashed border-border rounded-xl">
            <p className="text-muted">
              Nenhum produto salvo no banco. Clique acima para testar a
              persistência.
            </p>
          </div>
        ) : (
          produtos.map((produto: any) => (
            <Card
              key={produto.id}
              className="bg-background-secondary/40 border-border overflow-hidden hover:border-border transition-colors"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-center p-4 gap-6">
                  <div className="h-20 w-20 rounded-md bg-background shrink-0 flex items-center justify-center border border-border text-zinc-600">
                    <Package size={24} />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground truncate">
                        {produto.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-primary/10 text-primary border border-primary/20">
                        Salvo DB
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span>Estoque: {produto.stock}</span>
                      <span className="hidden sm:inline">&bull;</span>
                      <span>Margem: {produto.margin}%</span>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col gap-4 sm:gap-1 text-sm sm:text-right shrink-0">
                    <div>
                      <span className="text-muted mr-2 sm:hidden">Custo:</span>
                      <span className="text-muted">
                        R$ {Number(produto.cost).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted mr-2 sm:hidden">Venda:</span>
                      <span className="font-medium text-foreground">
                        R$ {Number(produto.price).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <form
                      action={async () => {
                        "use server";
                        await removerProduto(produto.id);
                      }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        type="submit"
                        className="text-danger hover:text-red-400 hover:bg-danger/10"
                      >
                        Excluir
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
