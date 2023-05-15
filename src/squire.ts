/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-params */
import { Character } from './characters.js';

export class Squire extends Character {
  speech;
  served;
  flattery;
  constructor(
    name: string,
    house: string,
    age: number,
    status: string,
    speech: string,
    served: string,
    flattery: number
  ) {
    super(name, house, age, status, speech);
    this.served = served;
    this.flattery = flattery;
    this.speech = 'Soy un loser';
  }
}
