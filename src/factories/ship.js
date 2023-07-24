export default class ship {
  constructor(id, length) {
    this.id = id;
    this.length = length;
    this.hits = 0;
    this.status = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}
