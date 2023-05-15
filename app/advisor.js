/* eslint-disable max-params */
import { Character } from "./characters.js";

export class Advisor extends Character {
  constructor(name, house, age, status, speech, advisedCharacter) {
    super(name, house, age, status, speech);
    this.advisedCharacter = advisedCharacter;
    this.speech = "No sé por qué, pero creo que voy a morir pronto";
  }
}
