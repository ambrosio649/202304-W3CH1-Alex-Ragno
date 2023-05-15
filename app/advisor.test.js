import { Advisor } from "./advisor.js";

describe("Given a class Advisor", () => {
  describe("When we instantiate it", () => {
    test("Then it should have an object with the properties of the class", () => {
      const character = new Advisor(
        "Tyrion",
        "Lannister",
        34,
        "alive",
        "No sé por qué, pero creo que voy a morir pronto",
        "Daenerys"
      );

      expect(character).toHaveProperty("name", "Tyrion");
      expect(character).toHaveProperty("house", "Lannister");
      expect(character).toHaveProperty("age", 34);
      expect(character).toHaveProperty("status", "alive");
      expect(character).toHaveProperty(
        "speech",
        "No sé por qué, pero creo que voy a morir pronto"
      );
      expect(character).toHaveProperty("advisedCharacter", "Daenerys");
    });
  });
});
