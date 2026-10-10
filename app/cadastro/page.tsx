import Link from "next/link";
import { signUp } from "@/app/actions/auth";

export default function Cadastro({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border p-8 rounded-xl shadow-2xl">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-background mx-auto mb-4 font-bold text-xl">
            ▲
          </div>
          <h1 className="text-2xl font-bold text-foreground">Criar Conta</h1>
          <p className="text-muted mt-2">
            Inicie sua operação de Dropshipping com IA
          </p>
        </div>

        <form action={signUp} className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full rounded-md border border-border bg-background-secondary px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="w-full rounded-md border border-border bg-background-secondary px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button className="w-full bg-primary hover:bg-emerald-600 text-background font-bold py-3 rounded-md transition mt-4">
            Cadastrar
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-danger/10 text-danger text-center text-sm rounded-md border border-danger/20">
              {searchParams.message}
            </p>
          )}

          <div className="text-center mt-6 text-sm text-muted">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Entrar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
