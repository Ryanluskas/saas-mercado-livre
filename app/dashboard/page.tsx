import { getDashboardMetrics } from "@/app/actions/dashboard";
import {
  BadgeDollarSign,
  TrendingUp,
  TrendingDown,
  Package,
  ShoppingCart,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DashboardPage() {
  const metrics = await getDashboardMetrics();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Visão Geral
        </h1>
        <p className="text-muted mt-1">
          Acompanhe suas métricas reais e o desempenho da sua operação do Banco
          de Dados.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-background/50 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Faturamento Total
            </CardTitle>
            <BadgeDollarSign className="h-4 w-4 text-muted" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              R$ {metrics.revenueTotal.toFixed(2)}
            </div>
            <p className="text-xs text-muted mt-1">
              Baseado nos webhooks do DB
            </p>
          </CardContent>
        </Card>
        <Card className="bg-background/50 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Pix Recebidos Hoje
            </CardTitle>
            <Activity className="h-4 w-4 text-muted" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              R$ {metrics.pixToday.toFixed(2)}
            </div>
            <p className="text-xs text-muted mt-1">Entradas de hoje</p>
          </CardContent>
        </Card>
        <Card className="bg-background/50 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Pedidos Válidos
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              +{metrics.totalOrders}
            </div>
            <p className="text-xs text-muted mt-1">
              Total de transações únicas
            </p>
          </CardContent>
        </Card>
        <Card className="bg-background/50 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Lucro Estimado
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              R$ {metrics.profitTotal.toFixed(2)}
            </div>
            <p className="text-xs text-muted mt-1">
              Baseado em margem (Simulado)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-background/50 border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              Evolução de Receita
            </CardTitle>
            <CardDescription className="text-muted">
              Desempenho dos últimos 7 dias (Demonstração)
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-end justify-between gap-2 pt-4">
            {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
              <div
                key={i}
                className="w-full bg-background-secondary rounded-t-sm relative group flex justify-center"
              >
                <div className="absolute -top-8 bg-zinc-800 border border-border text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-foreground">
                  R$ {height * 145}
                </div>
                <div
                  className="w-full bg-primary/80 hover:bg-primary transition-colors rounded-t-sm"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-background/50 border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Atividade Recente</CardTitle>
            <CardDescription className="text-muted">
              Mural de atualizações da conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 mr-4">
                  <BadgeDollarSign className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-foreground">
                    Novo PIX Registrado
                  </p>
                  <p className="text-sm text-muted">
                    Vá ao Pix Monitor para listar.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
