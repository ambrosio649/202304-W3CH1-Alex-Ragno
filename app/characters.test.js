import { Character } from "./characters";

describe("Given a class Character", () => {
  describe("When we instantiate it", () => {
    test("It should have an object with the properties of the class", () => {
      const character = new Character("Jon", "Stark", 33, "alive");

      expect(character).toHaveProperty("name", "Jon");
      expect(character).toHaveProperty("house", "Stark");
      expect(character).toHaveProperty("age", 33);
      expect(character).toHaveProperty("status", "alive");
    });
  });
});
