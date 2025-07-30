import { formatMoney } from "./formatMoney";

describe("formatMoney", () => {
  it("formatea correctamente un número a moneda COP", () => {
    const resultado = formatMoney(123456);
    expect(resultado).toBe("$ 123.456,00");
  });

  it("formatea correctamente un número pequeño a moneda COP", () => {
    expect(formatMoney(50)).toBe("$ 50,00");
  });

  it("formatea correctamente cero", () => {
    expect(formatMoney(0)).toBe("$ 0,00");
  });
});
