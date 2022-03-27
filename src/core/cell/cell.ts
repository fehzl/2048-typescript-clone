export default class Cell {
  #cellElement: HTMLElement;
  #x: number;
  #y: number;
  #tile: any;

  constructor(cellElement: HTMLElement, x: number, y: number) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  }

  get tile() {
    return this.#tile;
  }

  set tile(value: any) {
    this.#tile = value;
    if (value == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }
}
