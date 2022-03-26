import { html } from "lit-html";
import { Board } from "./board";

export function App() {
  return html`<div>${Board()}</div>`;
}
