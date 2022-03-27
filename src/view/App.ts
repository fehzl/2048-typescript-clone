import { html } from "lit-html";
import { Grid } from "~/core/grid";
import { Tile } from "~/core/tile";
import mounted from "~/utils/mounted";
import { Board } from "./board";

export function App() {
  mounted(() => {
    const board = document.getElementById("board");
    const grid = new Grid(board);
    grid.randomEmptyCell().tile = new Tile(board);
    grid.randomEmptyCell().tile = new Tile(board);
  });

  return html`<div>${Board()}</div>`;
}
