import { TrendingUp, AlertTriangle, ArrowUpRight, DollarSign, PackageOpen, ShoppingCart } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Visão Geral</h1>
        <p className="text-zinc-400">Bem-vindo de volta! Aqui está o resumo da sua operação hoje.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Metric Card 1 */}
        <div className="bg-card rounded-xl border border-zinc-800 p-6 flex flex-col">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Receita Bruta (Mês)</h3>
            <DollarSign className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">R$ 14.590,00</div>
          <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
            <TrendingUp size={12} /> +20.1% em relação ao mês anterior
          </p>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-card rounded-xl border border-zinc-800 p-6 flex flex-col">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Lucro Estimado</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold text-primary mt-2">R$ 3.245,50</div>
          <p className="text-xs text-zinc-500 mt-1">
            Margem média de 22.2%
          </p>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-card rounded-xl border border-zinc-800 p-6 flex flex-col">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Pedidos Pendentes</h3>
            <ShoppingCart className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">12</div>
          <p className="text-xs text-amber-500 font-medium mt-1 flex items-center gap-1">
            <AlertTriangle size={12} /> 3 atrasados para envio
          </p>
        </div>

        {/* Metric Card 4 */}
        <div className="bg-card rounded-xl border border-zinc-800 p-6 flex flex-col">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Produtos Ativos</h3>
            <PackageOpen className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">143</div>
          <p className="text-xs text-zinc-500 mt-1">
            4 sem estoque no fornecedor
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="bg-card rounded-xl border border-zinc-800 lg:col-span-4 p-6">
           <h3 className="text-lg font-medium text-white mb-4">Evolução de Vendas</h3>
           <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
             {/* Mock Chart */}
             {[40, 25, 45, 30, 60, 55, 75, 50, 85, 70, 90, 100].map((h, i) => (
                <div key={i} className="w-full bg-zinc-800 rounded-t-sm relative group hover:bg-zinc-700 transition-colors" style={{ height: `${h}%` }}>
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h*100}
                   </div>
                </div>
             ))}
           </div>
           <div className="flex justify-between text-xs text-zinc-500 mt-4 px-2">
             <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
             <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
           </div>
        </div>
        
        <div className="bg-card rounded-xl border border-zinc-800 lg:col-span-3 p-6 flex flex-col">
           <h3 className="text-lg font-medium text-white mb-4">Avisos e Ações</h3>
           
           <div className="space-y-4 flex-1">
              <div className="flex items-start gap-4 p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                <div>
                   <div className="text-sm font-medium text-white">Margem Negativa</div>
                   <div className="text-xs text-zinc-400 mt-1">2 produtos estão dando prejuízo após as novas taxas do ML.</div>
                   <button className="text-xs text-red-400 hover:text-red-300 font-medium mt-2">Revisar preços →</button>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 rounded-lg border border-amber-500/20 bg-amber-500/5">
                <PackageOpen className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <div>
                   <div className="text-sm font-medium text-white">Estoque Esgotado no Fornecedor</div>
                   <div className="text-xs text-zinc-400 mt-1">Smartwatch Y68 (Preto) está sem estoque no fornecedor "Atacado BR".</div>
                   <button className="text-xs text-amber-400 hover:text-amber-300 font-medium mt-2">Pausar anúncio →</button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
