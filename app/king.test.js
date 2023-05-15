import { King } from "./king.js";

describe("Given a class King", () => {
  describe("When we instantiate it", () => {
    test("Then it should have an object with the properties of the class", () => {
      const character = new King(
        "Tywin",
        "Lannister",
        48,
        "alive",
        "Vais a morir todos",
        4
      );

      expect(character).toHaveProperty("name", "Tywin");
      expect(character).toHaveProperty("house", "Lannister");
      expect(character).toHaveProperty("age", 48);
      expect(character).toHaveProperty("status", "alive");
      expect(character).toHaveProperty("speech", "Vais a morir todos");
      expect(character).toHaveProperty("kingYears", 4);
    });
  });
});
