import { AppCard } from "./card";
import UpdatesService from "./updatesService";

window.customElements.define("app-card", AppCard);
var body = document.querySelector("body");
var card = document.createElement("app-card");
body.appendChild(card);
card.addEventListener("click", clickHandler);

const updatesService = new UpdatesService();

updatesService.getBuses("32.0744198", "34.795655200000056").then(buses => {
  console.log(buses);
});

function clickHandler() {
  if (card.getAttribute("greet") === "hi") {
    card.setAttribute("greet", "hello");
  } else {
    card.setAttribute("greet", "hi");
  }
}
