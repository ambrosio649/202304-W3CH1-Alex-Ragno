/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-params */
import { Character } from './characters.js';

export class Advisor extends Character {
  speech;
  advisedCharacter;
  constructor(
    name: string,
    house: string,
    age: number,
    status: string,
    speech: string,
    advisedCharacter: string
  ) {
    super(name, house, age, status, speech);
    this.advisedCharacter = advisedCharacter;
    this.speech = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
