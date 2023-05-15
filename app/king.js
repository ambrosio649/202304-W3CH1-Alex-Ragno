/* eslint-disable max-params */
import { Character } from "./characters.js";

export class King extends Character {
  constructor(name, house, age, status, speech, kingYears) {
    super(name, house, age, status, speech);
    this.kingYears = kingYears;
    this.speech = "Vais a morir todos";
  }
}
