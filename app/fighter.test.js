import { Fighter } from "./fighter";

describe("Given a class Fighter", () => {
  describe("When we instantiate it", () => {
    test("Then it should have an object with the properties of the class", () => {
      const character = new Fighter(
        "Oberyn",
        "Martell",
        41,
        "alive",
        "Primero pego y luego pregunto",
        "lance",
        7
      );

      expect(character).toHaveProperty("name", "Oberyn");
      expect(character).toHaveProperty("house", "Martell");
      expect(character).toHaveProperty("age", 41);
      expect(character).toHaveProperty("status", "alive");
      expect(character).toHaveProperty(
        "speech",
        "Primero pego y luego pregunto"
      );
      expect(character).toHaveProperty("weapon", "lance");
      expect(character).toHaveProperty("skill", 7);
    });
  });
});
