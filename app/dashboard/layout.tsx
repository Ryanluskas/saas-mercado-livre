import Link from "next/link";
import { LayoutDashboard, Package, Calculator, Megaphone, ShoppingCart, Users, Settings } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-card bg-zinc-950/50 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-card">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center text-xs">▲</div>
            Venda.IA
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-4">Principal</div>
          <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem href="/dashboard/produtos" icon={<Package size={18} />} label="Produtos" />
          <NavItem href="/dashboard/pedidos" icon={<ShoppingCart size={18} />} label="Pedidos" />
          
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-8">Ferramentas</div>
          <NavItem href="/dashboard/calculadora" icon={<Calculator size={18} />} label="Calculadora de Lucro" />
          <NavItem href="/dashboard/ia" icon={<Megaphone size={18} />} label="Estúdio de IA" />
          
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-8">Configurações</div>
          <NavItem href="/dashboard/fornecedores" icon={<Users size={18} />} label="Fornecedores" />
          <NavItem href="/dashboard/configuracoes" icon={<Settings size={18} />} label="Minha Conta" />
        </nav>
        
        <div className="p-4 border-t border-card">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium text-white truncate">Plano Pro</div>
              <div className="text-xs text-zinc-500 truncate">Operação de Teste</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 border-b border-card bg-background/95 backdrop-blur flex items-center px-6 justify-between shrink-0">
          <div className="md:hidden flex items-center gap-2 text-primary font-bold">
            <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center text-xs">▲</div>
          </div>
          <div className="flex-1 flex justify-end">
             <div className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Integração Meli Ativa
             </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 bg-zinc-950/20">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, href, active = false }: { icon: React.ReactNode, label: string, href: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${active ? "bg-primary/10 text-primary font-medium" : "text-zinc-400 hover:text-white hover:bg-zinc-900"}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
}
