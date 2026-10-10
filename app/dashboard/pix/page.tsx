import {
  BadgeDollarSign,
  BellRing,
  Smartphone,
  ShieldCheck,
  Webhook,
  History,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPixTransactions } from "@/app/actions/pix";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
export default async function PixMonitorPage() {
  const transactions = await getPixTransactions();
  const webhookUrl =
    "https://saas-mercado-livre-hazel.vercel.app/api/webhooks/mercadopago";
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      {" "}
      <div>
        {" "}
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2 mb-1">
          {" "}
          <BadgeDollarSign className="text-primary" size={32} /> Central de
          Pagamentos & Pix{" "}
        </h1>{" "}
        <p className="text-muted">
          Monitoramento em tempo real de pagamentos, validação de segurança e
          alertas no celular.
        </p>{" "}
      </div>{" "}
      <div className="grid md:grid-cols-3 gap-6">
        {" "}
        {/* Provedores de Pagamento */}{" "}
        <div className="md:col-span-2 space-y-6">
          {" "}
          <Card className="bg-background border-border">
            {" "}
            <CardHeader>
              {" "}
              <CardTitle className="text-lg flex items-center gap-2">
                {" "}
                <ShieldCheck className="text-primary" size={20} /> Provedores
                Conectados{" "}
              </CardTitle>{" "}
              <CardDescription className="text-muted">
                Conecte seus gateways para receber notificações oficiais e
                verificadas.
              </CardDescription>{" "}
            </CardHeader>{" "}
            <CardContent className="space-y-4">
              {" "}
              {/* Mercado Pago */}{" "}
              <div className="flex items-center justify-between p-4 rounded-lg border border-primary bg-primary/5">
                {" "}
                <div className="flex items-center gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded bg-blue-500 flex items-center justify-center text-foreground font-bold text-xl">
                    {" "}
                    mp{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-semibold text-foreground">
                      Mercado Pago
                    </h4>{" "}
                    <p className="text-xs text-muted mt-0.5">
                      Validação de assinatura ativa • Webhook recebendo eventos
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {" "}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>{" "}
                    Conectado{" "}
                  </span>{" "}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground"
                  >
                    Configurar
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
              {/* Pagar.me Placeholder */}{" "}
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background-secondary/50 opacity-60 grayscale">
                {" "}
                <div className="flex items-center gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded bg-purple-600 flex items-center justify-center text-foreground font-bold text-xl">
                    {" "}
                    P.{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-semibold text-foreground">
                      Pagar.me
                    </h4>{" "}
                    <p className="text-xs text-muted mt-0.5">
                      Em breve: suporte oficial
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="border-border text-muted"
                >
                  Aguarde
                </Button>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>{" "}
          {/* Webhook Configuration */}{" "}
          <Card className="bg-background border-border">
            {" "}
            <CardHeader>
              {" "}
              <CardTitle className="text-lg flex items-center gap-2">
                {" "}
                <Webhook className="text-muted" size={20} /> Seu Webhook
                (Endpoint de Escuta){" "}
              </CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent>
              {" "}
              <div className="space-y-4">
                {" "}
                <div className="space-y-2">
                  {" "}
                  <Label className="text-muted">
                    URL para colar no Mercado Pago (Notificações IPN/Webhook)
                  </Label>{" "}
                  <div className="flex gap-2">
                    {" "}
                    <Input
                      readOnly
                      value={webhookUrl}
                      className="bg-background-secondary border-border font-mono text-sm text-primary"
                    />{" "}
                    <Button
                      variant="outline"
                      className="border-border hover:bg-card w-24 shrink-0"
                    >
                      {" "}
                      Copiar{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-md flex gap-3 text-sm text-blue-200">
                  {" "}
                  <AlertCircle
                    className="shrink-0 text-blue-400"
                    size={18}
                  />{" "}
                  <p>
                    Sua URL contém uma chave criptográfica exclusiva. Não a
                    compartilhe. O nosso servidor valida a assinatura
                    `x-signature` de cada evento para prevenir pagamentos
                    falsos.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </div>{" "}
        {/* Notificações e PWA */}{" "}
        <div className="space-y-6">
          {" "}
          <Card className="bg-background border-border">
            {" "}
            <CardHeader>
              {" "}
              <CardTitle className="text-lg flex items-center gap-2">
                {" "}
                <Smartphone className="text-primary" size={20} /> Notificações
                Push{" "}
              </CardTitle>{" "}
              <CardDescription className="text-muted">
                Receba alertas no celular mesmo com o app fechado.
              </CardDescription>{" "}
            </CardHeader>{" "}
            <CardContent className="space-y-4">
              {" "}
              <div className="flex flex-col items-center justify-center p-6 border border-dashed border-border rounded-lg text-center space-y-3 bg-background-secondary/30">
                {" "}
                <BellRing size={32} className="text-muted" />{" "}
                <div className="text-sm text-foreground">
                  Permita notificações neste dispositivo para receber os alertas
                  de Pix.
                </div>{" "}
                <Button className="bg-primary text-foreground hover:bg-primary w-full mt-2">
                  {" "}
                  Ativar Push Notifications{" "}
                </Button>{" "}
              </div>{" "}
              <div className="text-xs text-muted space-y-2 mt-4">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <div className="w-2 h-2 bg-primary rounded-full"></div>{" "}
                  Somente Pagamentos Aprovados{" "}
                </div>{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <div className="w-2 h-2 bg-card rounded-full"></div> Ignorar
                  Boletos Gerados{" "}
                </div>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>{" "}
          <Card className="bg-background border-border">
            {" "}
            <CardHeader className="pb-3">
              {" "}
              <CardTitle className="text-lg flex items-center gap-2">
                {" "}
                <History className="text-muted" size={20} /> Eventos
                Recentes{" "}
              </CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent>
              {" "}
              <div className="space-y-3">
                {" "}
                {transactions.length === 0 ? (
                  <div className="text-center py-6 text-muted text-sm">
                    {" "}
                    Nenhum pagamento recebido ainda.{" "}
                  </div>
                ) : (
                  transactions.map((tx: any) => (
                    <div
                      key={tx.id}
                      className="flex justify-between items-start text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0"
                    >
                      {" "}
                      <div>
                        {" "}
                        <div className="font-medium text-foreground flex items-center gap-2">
                          {" "}
                          Pix{" "}
                          {tx.status === "approved"
                            ? "Aprovado"
                            : tx.status}{" "}
                          <span className="text-[10px] bg-primary/20 text-primary px-1 rounded border border-primary">
                            {" "}
                            Validado{" "}
                          </span>{" "}
                        </div>{" "}
                        <div className="text-xs text-muted font-mono mt-1">
                          ID: {tx.external_id}
                        </div>{" "}
                        <div className="text-xs text-muted mt-0.5">
                          {tx.payer_name}
                        </div>{" "}
                      </div>{" "}
                      <div className="text-right">
                        {" "}
                        <div className="text-primary font-semibold">
                          + R$ {Number(tx.amount).toFixed(2)}
                        </div>{" "}
                        <div className="text-[10px] text-muted mt-1">
                          {" "}
                          {format(
                            new Date(tx.received_at),
                            "dd/MM 'às' HH:mm",
                            { locale: ptBR },
                          )}{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  ))
                )}{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
