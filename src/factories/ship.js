export default class ship {
  constructor(id, length, isVertical) {
    this.id = id;
    this.length = length;
    this.isVertical = isVertical;
    this.hits = 0;
    this.status = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    let status = this.hits >= this.length;
    if (status === true) {
      this.status = true;
    }

    return status;
  }

  getLength() {
    return this.length;
  }
}
