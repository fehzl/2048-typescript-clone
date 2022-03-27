import { Grid } from "~/core/grid";

describe("Grid", () => {
  document.body.innerHTML = `<div id="board"></div>`;
  const board = document.getElementById("board");
  const grid = new Grid(board);

  describe("Render", () => {
    it("Ensure grid have 4x4 cells", () => {
      expect(grid.cells.length).toBe(16);
    });

    describe("Styles", () => {
      it("Ensure grid element have grid size, cell size and cell gap", () => {
        expect(board.style.getPropertyValue("--grid-size")).toBeTruthy();
        expect(board.style.getPropertyValue("--cell-size")).toBeTruthy();
        expect(board.style.getPropertyValue("--cell-gap")).toBeTruthy();
      });

      it("Ensure --grid-size is 4", () => {
        expect(board.style.getPropertyValue("--grid-size")).toBe("4");
      });

      it("Ensure --cell-size is 20vmin", () => {
        expect(board.style.getPropertyValue("--cell-size")).toBe("20vmin");
      });

      it("Ensure --cell-gap is 2vmin", () => {
        expect(board.style.getPropertyValue("--cell-gap")).toBe("2vmin");
      });
    });

    describe("Empty cells", () => {
      it("Ensure all cells are empty", () => {
        expect(grid.cells.every((cell) => cell.tile == null)).toBeTruthy();
      });
    });
  });
});
