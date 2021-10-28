import { createTailwindGradient } from "../color-utils";

describe("color utils", () => {
  describe("when sentiment is undefined", () => {
    it("should return gray", () => {
      expect(createTailwindGradient(undefined)).toBe("bg-gray-300");
    });
  });
  it("should create correct color", () => {
    expect(createTailwindGradient(1)).toBe(
      "bg-gradient-to-r from-green-500 to-green-100"
    );
    expect(createTailwindGradient(-1)).toBe(
      "bg-gradient-to-r from-red-500 to-red-100"
    );
  });
  it("should handle zero", () => {
    expect(createTailwindGradient(0)).toBe("bg-gray-300");
  });
});
