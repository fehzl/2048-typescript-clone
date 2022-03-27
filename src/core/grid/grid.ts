import { addCellElements } from "~/utils/add-cell-elements";
import randomIndex from "~/utils/random-index";
import { Cell } from "../cell";

const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid {
  #cells: Cell[];

  constructor(gridElement: HTMLElement) {
    gridElement.style.setProperty("--grid-size", `${GRID_SIZE}`);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    this.#cells = addCellElements(gridElement, GRID_SIZE).map(
      (cellElement, index) => {
        return new Cell(
          cellElement,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE)
        );
      }
    );
  }

  get #emptyCells() {
    return this.#cells.filter((cell) => cell.tile == null);
  }

  get cells() {
    return this.#cells;
  }

  randomEmptyCell() {
    return this.#emptyCells[randomIndex(this.#emptyCells.length)];
  }
}
