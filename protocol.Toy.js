export default class Toy {
  constructor(type) {
    this.type = type;
  }

  isMoved() {
    console.log("Huuuuuuhu!")
  }

  getType() {
    return this.type
  }
}