/* eslint-disable max-params */
export class Character {
  constructor(name, house, age, status, speech) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = status;
    this.speech = speech;
    this.series = "Game of thrones";
  }

  belong() {
    return this.series;
  }

  kill() {
    this.status = "dead";
    return this.status;
  }

  talk() {
    return this.speech;
  }
}
