import { TrendingUp, TrendingDown, DollarSign, PackageOpen, ShoppingCart, Activity, ArrowUpRight, ArrowDownRight, MoreHorizontal, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Visão Geral Financeira</h1>
          <p className="text-zinc-400 text-sm">Acompanhe a saúde do seu negócio e o volume de transações.</p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1 rounded-lg">
           <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-800 text-white shadow-sm">Hoje</button>
           <button className="px-3 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white">7 dias</button>
           <button className="px-3 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white">30 dias</button>
           <button className="px-3 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white flex items-center gap-1"><Filter size={12}/> Filtro</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Metric Card 1: Faturamento */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-5 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <DollarSign size={80} className="text-emerald-500 translate-x-4 -translate-y-4" />
          </div>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Faturamento Bruto</h3>
          </div>
          <div className="text-3xl font-semibold text-white mt-1 font-sans tracking-tight relative z-10">R$ 42.590,00</div>
          <div className="flex items-center gap-2 mt-3 relative z-10">
             <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
               <ArrowUpRight size={12} /> 12.5%
             </div>
             <span className="text-xs text-zinc-500">vs. período anterior</span>
          </div>
        </div>

        {/* Metric Card 2: Lucro */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-5 flex flex-col hover:border-zinc-700 transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Lucro Líquido</h3>
          </div>
          <div className="text-3xl font-semibold text-emerald-400 mt-1 font-sans tracking-tight">R$ 9.245,50</div>
          <div className="flex items-center gap-2 mt-3">
             <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
               <TrendingUp size={12} /> 21.7% Margem
             </div>
             <span className="text-xs text-zinc-500">Média saudável</span>
          </div>
        </div>

        {/* Metric Card 3: Ticket Médio */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-5 flex flex-col hover:border-zinc-700 transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Ticket Médio</h3>
          </div>
          <div className="text-3xl font-semibold text-white mt-1 font-sans tracking-tight">R$ 145,80</div>
          <div className="flex items-center gap-2 mt-3">
             <div className="flex items-center gap-1 text-xs font-medium text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">
               <ArrowDownRight size={12} /> 2.4%
             </div>
             <span className="text-xs text-zinc-500">vs. período anterior</span>
          </div>
        </div>

        {/* Metric Card 4: Pedidos */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-5 flex flex-col hover:border-zinc-700 transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-zinc-400">Pedidos Pagos</h3>
          </div>
          <div className="text-3xl font-semibold text-white mt-1 font-sans tracking-tight">292</div>
          <div className="flex items-center gap-2 mt-3">
             <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
               <ArrowUpRight size={12} /> 18.2%
             </div>
             <span className="text-xs text-zinc-500">22 pendentes</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Gráfico Principal */}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 md:col-span-2 p-6 flex flex-col">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-semibold text-white">Receita x Custos</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400"><MoreHorizontal size={16}/></Button>
           </div>
           
           <div className="flex-1 flex items-end justify-between gap-2 h-64 mt-auto border-b border-zinc-800/50 pb-2">
             {[
               { rev: 40, cost: 25, label: "01/10" },
               { rev: 60, cost: 35, label: "02/10" },
               { rev: 45, cost: 30, label: "03/10" },
               { rev: 80, cost: 50, label: "04/10" },
               { rev: 75, cost: 45, label: "05/10" },
               { rev: 90, cost: 55, label: "06/10" },
               { rev: 100, cost: 60, label: "07/10" },
             ].map((d, i) => (
                <div key={i} className="w-full flex flex-col justify-end items-center gap-1 group relative h-full">
                   {/* Tooltip */}
                   <div className="absolute -top-10 bg-zinc-800 text-xs px-2 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border border-zinc-700 shadow-xl pointer-events-none">
                      Receita: R$ {(d.rev*100).toFixed(2)}<br/>
                      Custo: R$ {(d.cost*100).toFixed(2)}
                   </div>
                   {/* Barras */}
                   <div className="w-full max-w-[32px] bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/30 rounded-t-sm transition-colors relative" style={{ height: `${d.rev}%` }}>
                      <div className="absolute bottom-0 w-full bg-zinc-700/50 border-t border-zinc-600/50" style={{ height: `${(d.cost/d.rev)*100}%` }}></div>
                   </div>
                   <span className="text-[10px] text-zinc-500 mt-2">{d.label}</span>
                </div>
             ))}
           </div>
           <div className="flex gap-4 mt-4 text-xs">
              <div className="flex items-center gap-2 text-zinc-400"><div className="w-3 h-3 rounded-sm bg-emerald-500/40 border border-emerald-500/50"></div> Receita Bruta</div>
              <div className="flex items-center gap-2 text-zinc-400"><div className="w-3 h-3 rounded-sm bg-zinc-700 border border-zinc-600"></div> Custos Operacionais</div>
           </div>
        </div>
        
        {/* Atividade Recente e PIX */}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6 flex flex-col">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-semibold text-white">Monitor de Pagamentos</h3>
              <a href="/dashboard/pix" className="text-xs text-primary hover:text-emerald-400 transition-colors">Ver todos</a>
           </div>
           
           <div className="space-y-4 flex-1">
              {[
                { name: "João Pedro S.", product: "Smartwatch Y68", value: 79.90, time: "Agora mesmo", type: "pix" },
                { name: "Maria Clara", product: "Fone TWS F9", value: 95.00, time: "Há 15 min", type: "pix" },
                { name: "Carlos T.", product: "Mini Liquidificador", value: 120.00, time: "Há 2 horas", type: "cc" },
                { name: "Ana Beatriz", product: "Smartwatch Y68", value: 79.90, time: "Há 3 horas", type: "pix" },
                { name: "Lucas F.", product: "Fone TWS F9", value: 95.00, time: "Há 5 horas", type: "boleto" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-zinc-800/50 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">
                       {tx.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{tx.name}</p>
                      <p className="text-[10px] text-zinc-500">{tx.product} • {tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-emerald-400">+ R$ {tx.value.toFixed(2)}</p>
                    <p className="text-[10px] text-zinc-500 uppercase">{tx.type === 'pix' ? '🟢 PIX' : tx.type === 'cc' ? '💳 Cartão' : '📄 Boleto'}</p>
                  </div>
                </div>
              ))}
           </div>
           
           <Button className="w-full mt-4 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800">
              Conectar Mercado Pago
           </Button>
        </div>
      </div>
    </div>
  );
}
