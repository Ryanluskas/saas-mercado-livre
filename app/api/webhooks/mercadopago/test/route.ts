import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Simulador local para o webhook
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const url = `${protocol}://${host}/api/webhooks/mercadopago?user_id=11111111-1111-1111-1111-111111111111`;

  const payload = {
    action: "payment.created",
    data: {
      id: Math.floor(Math.random() * 1000000000),
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-signature": "test-signature-123",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return NextResponse.json({ sent_to: url, payload, result }, { status: 200 });
}
