import { describe, expect, it } from "vitest";

import { cakeCatalog, cakeOrderRequestSchema, estimateCartTotal } from "@/lib/cake-store";

describe("cake checkout safeguards", () => {
  it("keeps the displayed sample estimate consistent for selected size and quantity", () => {
    const cake = cakeCatalog.find((item) => item.id === "cookies-cream-oreo");

    expect(cake?.estimateFor500g).toBe(850);
    expect(
      estimateCartTotal([{ productId: "cookies-cream-oreo", weight: "500 g", quantity: 2 }]),
    ).toBe(1700);
    expect(
      estimateCartTotal([{ productId: "cookies-cream-oreo", weight: "1 kg", quantity: 1 }]),
    ).toBe(1488);
  });

  it("rejects an order request without a valid way to contact the customer", () => {
    const result = cakeOrderRequestSchema.safeParse({
      customerName: "A",
      customerEmail: "not-an-email",
      customerPhone: "123",
      deliveryAddress: "Too short",
      requestedDate: "",
      customerNote: "",
      items: [{ productId: "cookies-cream-oreo", weight: "500 g", quantity: 1 }],
    });

    expect(result.success).toBe(false);
  });

  it("accepts a complete request with an item from the current sample menu", () => {
    const result = cakeOrderRequestSchema.safeParse({
      customerName: "Ananya Rao",
      customerEmail: "ananya@example.com",
      customerPhone: "+91 98765 43210",
      deliveryAddress: "Alcon Rethos, Kharadi, Pune 411014",
      requestedDate: "",
      customerNote: "Please add a handwritten note.",
      items: [{ productId: "cookies-cream-oreo", weight: "1 kg", quantity: 1 }],
    });

    expect(result.success).toBe(true);
  });
});
