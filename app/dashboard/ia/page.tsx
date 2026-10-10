"use client";

import { useState } from "react";
import { Megaphone, Sparkles, Copy, RefreshCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function IAStudioPage() {
  const [productName, setProductName] = useState("");
  const [productFeatures, setProductFeatures] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulação da chamada da API Gemini
    setTimeout(() => {
      setGeneratedResult(
        `🔥 *NOVIDADE IMPERDÍVEL!* 🔥\n\nConheça o ${productName || "Produto Incrível"}!\n\nPrincipais benefícios:\n${productFeatures
          .split(",")
          .map((f) => `✅ ${f.trim()}`)
          .join(
            "\n",
          )}\n\n👉 *Ideal para quem busca qualidade e praticidade no dia a dia.*\n\n📦 Pronta Entrega | 🚚 Envio Rápido\n\nGaranta já o seu antes que acabe o estoque! Link na bio.`,
      );
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    if (generatedResult) {
      navigator.clipboard.writeText(generatedResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Megaphone className="text-primary" size={28} />
          Estúdio de IA
        </h1>
        <p className="text-muted mt-1">
          Gere títulos magnéticos, descrições vendedoras e copies para redes
          sociais em segundos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-background/50 border-border flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Sparkles className="text-primary" size={18} /> O que vamos criar?
            </CardTitle>
            <CardDescription className="text-muted">
              Preencha as características básicas do produto para a IA criar o
              conteúdo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <div className="space-y-2">
              <Label htmlFor="productName" className="text-foreground">
                Nome do Produto
              </Label>
              <Input
                id="productName"
                placeholder="Ex: Smartwatch Y68"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="bg-background-secondary border-border focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="features" className="text-foreground">
                Principais características (separadas por vírgula)
              </Label>
              <textarea
                id="features"
                rows={4}
                placeholder="Ex: Prova d'água, Bateria longa duração, Monitor cardíaco"
                value={productFeatures}
                onChange={(e) => setProductFeatures(e.target.value)}
                className="w-full rounded-md border border-border bg-background-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Formato de Saída</Label>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 flex-1"
                >
                  Descrição ML
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted hover:text-foreground flex-1"
                >
                  Post Instagram
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted hover:text-foreground flex-1"
                >
                  Título SEO
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border pt-4 mt-2">
            <Button
              className="w-full bg-primary text-foreground hover:bg-emerald-600 gap-2"
              onClick={handleGenerate}
              disabled={isGenerating || !productName}
            >
              {isGenerating ? (
                <RefreshCcw className="animate-spin" size={16} />
              ) : (
                <Sparkles size={16} />
              )}
              {isGenerating
                ? "Gerando conteúdo..."
                : "Gerar com Inteligência Artificial"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-background-secondary/40 border-border flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Resultado Gerado</CardTitle>
            <CardDescription className="text-muted">
              Pronto para copiar e colar no seu anúncio.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {generatedResult ? (
              <div className="flex-1 bg-background border border-border rounded-md p-4 text-sm text-foreground whitespace-pre-wrap font-mono">
                {generatedResult}
              </div>
            ) : (
              <div className="flex-1 border border-dashed border-border rounded-md flex flex-col items-center justify-center text-muted p-8 text-center space-y-2">
                <Sparkles size={32} className="text-zinc-700 mb-2" />
                <p>O conteúdo gerado aparecerá aqui.</p>
                <p className="text-xs">
                  Utilizamos o Gemini API para garantir textos com alta taxa de
                  conversão.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t border-border pt-4 mt-2 justify-end gap-2">
            <Button
              variant="outline"
              className="border-border text-foreground hover:text-foreground"
              disabled={!generatedResult}
            >
              <RefreshCcw className="mr-2 h-4 w-4" /> Refazer
            </Button>
            <Button
              className="bg-zinc-800 text-foreground hover:bg-zinc-700 border border-border"
              disabled={!generatedResult}
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {copied ? "Copiado!" : "Copiar Texto"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
