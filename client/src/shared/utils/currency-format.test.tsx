import { currencyFormat, currencies } from "./currency-format";

describe("currencyFormat function", () => {
  it("should format the value for ARS currency correctly", () => {
    const formattedValue = currencyFormat(currencies.ARS, 1000);

    expect(formattedValue).toContain("1.000");
    expect(formattedValue).toContain("$");
  });

  it("should return the value for unknown currency", () => {
    const formattedValue = currencyFormat("USD" as currencies, 1000);

    expect(formattedValue).toBe(1000);
  });
});
