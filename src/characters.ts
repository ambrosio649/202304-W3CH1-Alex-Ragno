/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-params */
export class Character {
  static series = 'Game of thrones';
  name;
  house;
  age;
  status;
  speech;
  constructor(
    name: string,
    house: string,
    age: number,
    status: string,
    speech: string,
    series: string
  ) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = status;
    this.speech = speech;
    this.series = 'Game of thrones';
  }

  belong() {
    return this.series;
  }

  kill() {
    this.status = 'dead';
    return this.status;
  }

  talk() {
    return this.speech;
  }
}
