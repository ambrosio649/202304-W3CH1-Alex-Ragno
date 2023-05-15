/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-params */
import { Character } from './characters.js';

export class King extends Character {
  speech;
  kingYears;
  constructor(
    name: string,
    house: string,
    age: number,
    status: string,
    speech: string,
    kingYears: number
  ) {
    super(name, house, age, status, speech);
    this.kingYears = kingYears;
    this.speech = 'Vais a morir todos';
  }
}
