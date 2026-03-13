import { describe, it, expect } from "vitest";

describe("Example Test Suite", () => {
  it("should pass basic assertion", () => {
    expect(true).toBe(true);
  });

  it("should correctly add numbers", () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
  });

  it("should check string equality", () => {
    expect("Lazuli Pilates").toContain("Lazuli");
  });

  it("should handle array operations", () => {
    const array = [1, 2, 3, 4, 5];
    expect(array).toHaveLength(5);
    expect(array).toContain(3);
  });

  it("should check object properties", () => {
    const app = {
      name: "Lazuli Pilates",
      city: "Santa Cruz do Sul",
    };
    expect(app).toHaveProperty("name");
    expect(app.name).toBe("Lazuli Pilates");
  });
});
