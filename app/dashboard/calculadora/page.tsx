"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Calculator as CalcIcon,
  RefreshCcw,
  Save,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function ProfitCalculator() {
  const [salePrice, setSalePrice] = useState<number>(199.9);
  const [productCost, setProductCost] = useState<number>(55.0);
  const [shippingCost, setShippingCost] = useState<number>(19.9);
  const [taxesPercent, setTaxesPercent] = useState<number>(6.0); // Simples Nacional etc
  const [marketplaceFeePercent, setMarketplaceFeePercent] =
    useState<number>(16.0); // Taxa Clássico/Premium
  const [fixedFee, setFixedFee] = useState<number>(6.0); // Tarifa fixa ML para < R$79
  const [adsCost, setAdsCost] = useState<number>(0);

  // Cálculos
  const taxesValue = salePrice * (taxesPercent / 100);
  const marketplaceFeeValue = salePrice * (marketplaceFeePercent / 100);
  const totalCosts =
    productCost +
    shippingCost +
    taxesValue +
    marketplaceFeeValue +
    fixedFee +
    adsCost;
  const estimatedProfit = salePrice - totalCosts;
  const profitMarginPercent =
    salePrice > 0 ? (estimatedProfit / salePrice) * 100 : 0;

  const isProfitable = estimatedProfit > 0;
  const isHealthyMargin = profitMarginPercent >= 15;

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <CalcIcon className="text-primary" size={28} />
          Calculadora de Margem
        </h1>
        <p className="text-muted mt-1">
          Simule custos e projete seus lucros antes de iniciar uma operação.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {/* Formulário de Parâmetros */}
        <div className="md:col-span-7 space-y-6">
          <Card className="bg-background/50 border-border">
            <CardHeader>
              <CardTitle className="text-xl">Parâmetros do Produto</CardTitle>
              <CardDescription className="text-muted">
                Insira os valores reais da sua operação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salePrice" className="text-foreground">
                    Preço de Venda (R$)
                  </Label>
                  <Input
                    id="salePrice"
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productCost" className="text-foreground">
                    Custo no Fornecedor (R$)
                  </Label>
                  <Input
                    id="productCost"
                    type="number"
                    value={productCost}
                    onChange={(e) => setProductCost(Number(e.target.value))}
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="marketplaceFeePercent"
                    className="text-foreground"
                  >
                    Comissão ML (%)
                  </Label>
                  <Input
                    id="marketplaceFeePercent"
                    type="number"
                    value={marketplaceFeePercent}
                    onChange={(e) =>
                      setMarketplaceFeePercent(Number(e.target.value))
                    }
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fixedFee" className="text-foreground">
                    Tarifa Fixa ML (R$)
                  </Label>
                  <Input
                    id="fixedFee"
                    type="number"
                    value={fixedFee}
                    onChange={(e) => setFixedFee(Number(e.target.value))}
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shippingCost" className="text-foreground">
                    Frete Embutido
                  </Label>
                  <Input
                    id="shippingCost"
                    type="number"
                    value={shippingCost}
                    onChange={(e) => setShippingCost(Number(e.target.value))}
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxesPercent" className="text-foreground">
                    Impostos (%)
                  </Label>
                  <Input
                    id="taxesPercent"
                    type="number"
                    value={taxesPercent}
                    onChange={(e) => setTaxesPercent(Number(e.target.value))}
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adsCost" className="text-foreground">
                    Ads/Publi (R$)
                  </Label>
                  <Input
                    id="adsCost"
                    type="number"
                    value={adsCost}
                    onChange={(e) => setAdsCost(Number(e.target.value))}
                    className="bg-background-secondary border-border focus-visible:ring-primary"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-border pt-4 mt-2">
              <Button
                variant="outline"
                className="border-border text-foreground hover:text-foreground hover:bg-zinc-800"
              >
                <RefreshCcw className="mr-2 h-4 w-4" /> Resetar
              </Button>
              <Button className="bg-primary text-foreground hover:bg-emerald-600">
                <Save className="mr-2 h-4 w-4" /> Salvar Simulação
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Resumo Financeiro */}
        <div className="md:col-span-5 space-y-6">
          <Card className="bg-background-secondary/40 border-border flex flex-col h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Projeção de Resultado</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-6">
              <div
                className={`p-6 rounded-xl border ${isProfitable ? (isHealthyMargin ? "bg-primary/10 border-primary/20" : "bg-warning/10 border-warning/20") : "bg-danger/10 border-danger/20"}`}
              >
                <div className="text-sm font-medium mb-1 text-muted">
                  Lucro Líquido Estimado
                </div>
                <div
                  className={`text-4xl font-bold flex items-center gap-2 ${isProfitable ? (isHealthyMargin ? "text-primary" : "text-warning") : "text-danger"}`}
                >
                  {isProfitable ? (
                    <TrendingUp size={28} />
                  ) : (
                    <TrendingDown size={28} />
                  )}
                  R$ {estimatedProfit.toFixed(2)}
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold">
                    Margem: {profitMarginPercent.toFixed(1)}%
                  </span>
                  {isProfitable && !isHealthyMargin && (
                    <span className="text-warning/80 ml-2">
                      (Atenção: Margem baixa)
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Composição dos Custos
                </div>
                <CostRow
                  label="Custo do Produto"
                  value={productCost}
                  total={salePrice}
                  color="bg-blue-500"
                />
                <CostRow
                  label="Tarifas Marketplace"
                  value={marketplaceFeeValue + fixedFee}
                  total={salePrice}
                  color="bg-purple-500"
                />
                <CostRow
                  label="Frete Embutido"
                  value={shippingCost}
                  total={salePrice}
                  color="bg-orange-500"
                />
                <CostRow
                  label="Impostos e Ads"
                  value={taxesValue + adsCost}
                  total={salePrice}
                  color="bg-danger"
                />

                <div className="pt-3 mt-3 border-t border-border">
                  <CostRow
                    label="LUCRO"
                    value={estimatedProfit}
                    total={salePrice}
                    color="bg-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CostRow({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) {
  const percent = total > 0 ? Math.max(0, (value / total) * 100) : 0;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-muted">{label}</span>
        <span className="font-medium text-zinc-200">
          R$ {Math.max(0, value).toFixed(2)}
        </span>
      </div>
      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
