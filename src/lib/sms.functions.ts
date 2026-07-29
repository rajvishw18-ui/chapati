import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { buildOrderMessage, buildWaiterMessage, sendSms } from "./sms.server";

const tableSchema = z.string().trim().max(20).optional();

const orderSchema = z.object({
  table: tableSchema,
  lines: z
    .array(
      z.object({
        id: z.string().min(1).max(80),
        variant: z.enum(["half", "full"]),
        qty: z.number().int().min(1).max(50),
      }),
    )
    .min(1)
    .max(60),
});

export const callWaiter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ table: tableSchema }).parse(data))
  .handler(async ({ data }) => {
    await sendSms(buildWaiterMessage(data.table));
    return { ok: true as const };
  });

export const placeOrder = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => orderSchema.parse(data))
  .handler(async ({ data }) => {
    await sendSms(buildOrderMessage(data.lines, data.table));
    return { ok: true as const };
  });
