import { AppCard } from "./card";
window.customElements.define("app-card", AppCard);
var body = document.querySelector("body");
var card = document.createElement("app-card");
body.appendChild(card);
card.addEventListener("click", clickHandler);

function clickHandler() {
  if (card.getAttribute("greet") === "hi") {
    card.setAttribute("greet", "hello");
  } else {
    card.setAttribute("greet", "hi");
  }
}
