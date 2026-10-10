"use client";

import { Check, Star, Zap, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function AssinaturaPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-10">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Planos e Assinatura</h1>
        <p className="text-zinc-400">Escolha o plano ideal para escalar a sua operação de Dropshipping.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Plano Gratuito / Starter */}
        <Card className="bg-zinc-950 border-zinc-800 flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Starter</CardTitle>
            <CardDescription className="text-zinc-400">Para quem está começando e validando produtos.</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">Grátis</span>
              <span className="text-zinc-500"> / para sempre</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> Até 10 produtos no catálogo</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> Calculadora de Margem básica</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> 5 gerações de IA por mês</li>
              <li className="flex items-center gap-3 opacity-50"><Check size={16} className="text-zinc-600" /> Pix Monitor (Indisponível)</li>
              <li className="flex items-center gap-3 opacity-50"><Check size={16} className="text-zinc-600" /> Alertas Push (Indisponível)</li>
            </ul>
          </CardContent>
          <CardFooter>
             <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 pointer-events-none">Seu plano atual</Button>
          </CardFooter>
        </Card>

        {/* Plano Pro */}
        <Card className="bg-gradient-to-b from-emerald-950/40 to-zinc-950 border-emerald-500/30 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
             <Star size={12} fill="currentColor"/> Mais popular
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-emerald-400 flex items-center gap-2">
               Pro <Zap size={18} className="text-emerald-400" fill="currentColor"/>
            </CardTitle>
            <CardDescription className="text-zinc-400">Para operações sérias que precisam de automação.</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">R$ 49,90</span>
              <span className="text-zinc-500"> / mês</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <ul className="space-y-3 text-sm text-zinc-200">
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> Produtos e Fornecedores ilimitados</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> Calculadora de Margem avançada</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> <strong>Geração de IA Ilimitada</strong></li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> <strong>Pix Monitor em tempo real</strong></li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> Alertas Push no Celular</li>
            </ul>
          </CardContent>
          <CardFooter>
             <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-base h-11">
                Fazer Upgrade para o Pro
             </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex items-start gap-4">
         <Shield className="text-zinc-400 shrink-0 mt-1" size={24} />
         <div>
            <h3 className="text-white font-medium">Pagamento Seguro</h3>
            <p className="text-sm text-zinc-400 mt-1">
               Os pagamentos da assinatura são processados com criptografia de ponta a ponta pelo Mercado Pago ou Stripe. 
               Nós não armazenamos os dados do seu cartão. Você pode cancelar a qualquer momento no painel.
            </p>
         </div>
      </div>
    </div>
  );
}
