import "./styles/global.scss";
import { html, render } from "lit-html";
import { App } from "./view/App";

render(html`${App()}`, document.getElementById("root"));
