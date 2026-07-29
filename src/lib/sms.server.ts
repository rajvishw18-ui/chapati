import { dishes, priceOf, type Variant } from "@/data/menu";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";

export interface OrderLineInput {
  id: string;
  variant: Variant;
  qty: number;
}

export async function sendSms(body: string): Promise<{ ok: true; sid: string }> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const twilioKey = process.env.TWILIO_API_KEY;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.MANAGER_PHONE_NUMBER;

  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!twilioKey) throw new Error("TWILIO_API_KEY is not configured");
  if (!from) throw new Error("TWILIO_FROM_NUMBER is not configured");
  if (!to) throw new Error("MANAGER_PHONE_NUMBER is not configured");

  const response = await fetch(`${GATEWAY_URL}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": twilioKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Twilio request failed [${response.status}]: ${text}`);
    throw new Error(`Twilio request failed [${response.status}]: ${text}`);
  }

  const data = (await response.json()) as { sid: string };
  return { ok: true, sid: data.sid };
}

export function buildOrderMessage(lines: OrderLineInput[], table?: string): string {
  const rows: string[] = [];
  let subtotal = 0;

  for (const line of lines) {
    const dish = dishes.find((d) => d.id === line.id);
    if (!dish) continue;
    const unit = priceOf(dish, line.variant);
    const amount = unit * line.qty;
    subtotal += amount;
    const portion = dish.halfPrice ? ` (${line.variant})` : "";
    rows.push(`${line.qty} x ${dish.name.en}${portion} - Rs ${amount}`);
  }

  const tax = Math.round(subtotal * 0.05);
  const header = table ? `New order — Table ${table}` : "New order";
  return [
    `Chapati.com — ${header}`,
    ...rows,
    `Subtotal: Rs ${subtotal}`,
    `GST (5%): Rs ${tax}`,
    `Total: Rs ${subtotal + tax}`,
  ].join("\n");
}

export function buildWaiterMessage(table?: string): string {
  return table
    ? `Chapati.com — Waiter requested at Table ${table}.`
    : "Chapati.com — A guest has requested a waiter.";
}
