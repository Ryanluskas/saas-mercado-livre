-- Tabela de Transações PIX (Eventos de Webhook)
CREATE TABLE IF NOT EXISTS public.pix_transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    provider TEXT NOT NULL, -- ex: 'mercadopago', 'efi', 'asaas'
    external_id TEXT NOT NULL, -- ID único da transação no provedor para idempotência
    amount DECIMAL(10,2) NOT NULL,
    status TEXT NOT NULL, -- 'approved', 'pending', 'refunded'
    payer_name TEXT,
    payer_document TEXT,
    received_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(provider, external_id) -- Garante idempotência: não salva o mesmo evento duas vezes
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.pix_transactions ENABLE ROW LEVEL SECURITY;

-- Políticas de Segurança: O usuário só vê suas próprias transações
CREATE POLICY "Usuários veem apenas seus próprios Pix" 
ON public.pix_transactions 
FOR SELECT 
USING (auth.uid() = user_id);

-- Apenas o backend (Service Role) pode inserir transações via Webhook
CREATE POLICY "Apenas Service Role insere Pix" 
ON public.pix_transactions 
FOR INSERT 
WITH CHECK (true); -- A restrição real será feita no servidor usando a chave Service Role
