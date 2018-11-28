import { AppCard } from "./card";
import UpdatesService from "./updatesService";
import response from "./mock";

window.customElements.define("app-card", AppCard);
var body = document.querySelector("body");
var card = document.createElement("app-card");
body.appendChild(card);
card.addEventListener("click", clickHandler);

const updatesService = new UpdatesService();

// updatesService.getBuses("32.0744198", "34.795655200000056").then(stops => {
//   console.log(stops);
//   debugger;
//   let bus;
//   Object.keys(stops).map(stopName => {
//     bus = stops[stopName][0];
//   });
//   console.log(bus);
//   card.setAttribute("data", JSON.stringify(bus));
// });
console.log(response);
let bus;
Object.keys(response).forEach(stop => {
  bus = response[stop][0];
});
console.log("bus", bus);
card.setAttribute("data", JSON.stringify(bus));

function clickHandler() {
  if (card.getAttribute("greet") === "hi") {
    card.setAttribute("greet", "hello");
  } else {
    card.setAttribute("greet", "hi");
  }
}
