"use client";

import { Check, Star, Zap, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function AssinaturaPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-10">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Planos e Assinatura
        </h1>
        <p className="text-muted">
          Escolha o plano ideal para escalar a sua operação de Dropshipping.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Plano Gratuito / Starter */}
        <Card className="bg-background border-border flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Starter</CardTitle>
            <CardDescription className="text-muted">
              Para quem está começando e validando produtos.
            </CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-foreground">Grátis</span>
              <span className="text-muted"> / para sempre</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" /> Até 10 produtos no
                catálogo
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" /> Calculadora de
                Margem básica
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" /> 5 gerações de IA
                por mês
              </li>
              <li className="flex items-center gap-3 opacity-50">
                <Check size={16} className="text-zinc-600" /> Pix Monitor
                (Indisponível)
              </li>
              <li className="flex items-center gap-3 opacity-50">
                <Check size={16} className="text-zinc-600" /> Alertas Push
                (Indisponível)
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-border text-foreground pointer-events-none"
            >
              Seu plano atual
            </Button>
          </CardFooter>
        </Card>

        {/* Plano Pro */}
        <Card className="bg-gradient-to-b from-emerald-950/40 to-zinc-950 border-primary/30 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-emerald-950 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
            <Star size={12} fill="currentColor" /> Mais popular
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              Pro <Zap size={18} className="text-primary" fill="currentColor" />
            </CardTitle>
            <CardDescription className="text-muted">
              Para operações sérias que precisam de automação.
            </CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-foreground">
                R$ 49,90
              </span>
              <span className="text-muted"> / mês</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <ul className="space-y-3 text-sm text-zinc-200">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" /> Produtos e
                Fornecedores ilimitados
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" /> Calculadora de
                Margem avançada
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" />{" "}
                <strong>Geração de IA Ilimitada</strong>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" />{" "}
                <strong>Pix Monitor em tempo real</strong>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-primary" /> Alertas Push no
                Celular
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-emerald-600 text-foreground font-medium text-base h-11">
              Fazer Upgrade para o Pro
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 bg-background-secondary/50 border border-border rounded-xl p-6 flex items-start gap-4">
        <Shield className="text-muted shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-foreground font-medium">Pagamento Seguro</h3>
          <p className="text-sm text-muted mt-1">
            Os pagamentos da assinatura são processados com criptografia de
            ponta a ponta pelo Mercado Pago ou Stripe. Nós não armazenamos os
            dados do seu cartão. Você pode cancelar a qualquer momento no
            painel.
          </p>
        </div>
      </div>
    </div>
  );
}
