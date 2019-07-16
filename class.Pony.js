import Toy from "./protocol.Toy"

export default class Pony extends Toy {
  #_nb = 1;

  constructor() {
    super();
    this.id = this.#_nb;
    console.log(`Pony #${this.id} is singing -->
    Dou-double poney, j’fais izi money
    D’où tu m’connais ? Parle moi en billets violets
    Dou-double poney, j’fais izi money`);
    this.#_nb++;
  }
}