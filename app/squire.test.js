import { Squire } from "./squire";

describe("Given a class Squire", () => {
  describe("When we instantiate it", () => {
    test("Then it should have an object with the properties of the class", () => {
      const character = new Squire(
        "Bronn",
        "Hightower",
        39,
        "alive",
        "Soy un loser",
        "Jaime",
        6
      );

      expect(character).toHaveProperty("name", "Bronn");
      expect(character).toHaveProperty("house", "Hightower");
      expect(character).toHaveProperty("age", 39);
      expect(character).toHaveProperty("status", "alive");
      expect(character).toHaveProperty("speech", "Soy un loser");
      expect(character).toHaveProperty("served", "Jaime");
      expect(character).toHaveProperty("flattery", 6);
    });
  });
});
