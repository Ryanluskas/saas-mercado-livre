import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full border-b border-card bg-background py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-foreground">
            ▲
          </div>
          Venda.IA
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          <Link href="/dashboard" className="hover:text-foreground transition">
            Recursos
          </Link>
          <Link
            href="/dashboard/assinatura"
            className="hover:text-foreground transition"
          >
            Planos
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="text-sm px-4 py-2 hover:text-foreground transition"
          >
            Entrar
          </Link>
          <Link
            href="/dashboard"
            className="text-sm px-4 py-2 bg-primary text-foreground rounded-md hover:bg-emerald-600 transition font-medium"
          >
            Começar Agora
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-6xl flex flex-col items-center pt-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Escale sua operação de <br />
          <span className="text-primary">Dropshipping com IA</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Gerencie produtos, calcule margens exatas e publique anúncios
          otimizados no Mercado Livre sem precisar de estoque físico. A
          tecnologia cuidando do trabalho repetitivo para você focar no lucro.
        </p>

        <div className="flex gap-4 mb-16">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-primary text-foreground rounded-md text-lg font-medium hover:bg-emerald-600 transition"
          >
            Iniciar Operação Própria
          </Link>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full aspect-video max-w-5xl bg-card rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col">
          {/* Mockup Dashboard Header */}
          <div className="h-12 border-b border-border flex items-center px-4 gap-4 bg-background-secondary/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-danger/20"></div>
              <div className="w-3 h-3 rounded-full bg-warning/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <div className="text-xs text-muted">
              painel.vendaia.com.br/dashboard
            </div>
          </div>
          {/* Mockup Content */}
          <div className="flex-1 p-8 flex gap-6">
            <div className="w-64 border-r border-border hidden md:block space-y-4">
              <div className="h-8 bg-zinc-800 rounded-md w-3/4 animate-pulse"></div>
              <div className="h-8 bg-zinc-800/50 rounded-md w-1/2"></div>
              <div className="h-8 bg-zinc-800/50 rounded-md w-2/3"></div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="h-32 bg-zinc-800 rounded-xl w-full border border-border p-6 flex flex-col justify-between">
                <div className="text-muted text-sm">Receita Estimada</div>
                <div className="text-3xl text-primary font-bold">
                  R$ 14.590,00
                </div>
              </div>
              <div className="flex-1 flex gap-6">
                <div className="flex-1 bg-zinc-800/50 rounded-xl border border-border p-6">
                  <div className="text-muted text-sm mb-4">
                    Calculadora de Margem
                  </div>
                  <div className="h-8 bg-zinc-800 rounded-md mb-2"></div>
                  <div className="h-8 bg-zinc-800 rounded-md"></div>
                </div>
                <div className="flex-1 bg-zinc-800/50 rounded-xl border border-border p-6">
                  <div className="text-muted text-sm mb-4">Estúdio de IA</div>
                  <div className="h-24 bg-zinc-800 rounded-md mb-2"></div>
                  <div className="h-8 bg-primary/20 rounded-md border border-primary/50 text-primary flex items-center justify-center text-sm">
                    ✨ Gerando Copy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="w-full mt-32 border-t border-border py-8 text-center text-sm text-muted">
        &copy; 2026 Venda.IA - Plataforma de Dropshipping
      </footer>
    </div>
  );
}
