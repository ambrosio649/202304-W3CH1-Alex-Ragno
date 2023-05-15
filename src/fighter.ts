/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-params */
import { Character } from './characters.js';

export class Fighter extends Character {
  speech;
  weapon;
  skill;
  constructor(
    name: string,
    house: string,
    age: number,
    status: string,
    speech: string,
    weapon: string,
    skill: number
  ) {
    super(name, house, age, status, speech);
    this.weapon = weapon;
    this.skill = skill;
    this.speech = 'Primero pego y luego pregunto';
  }
}
