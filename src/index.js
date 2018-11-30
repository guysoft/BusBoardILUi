import { AppCard } from "./components/card";
import UpdatesService from "./updatesService";
import response from "./mock";

window.customElements.define("app-card", AppCard);
var body = document.querySelector("body");
var container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

// const updatesService = new UpdatesService();

// updatesService.getBuses("32.0744198", "34.795655200000056").then(stops => {
//   createBusCards(stops);
// });

createBusCards(response);

function createBusCards(stops) {
  Object.keys(stops).forEach(stopName => {
    stops[stopName].forEach(busData => {
      addBusCard(busData);
      console.log(busData);
    });
  });
}

function addBusCard(busData) {
  var card = document.createElement("app-card");
  card.data = busData;
  container.appendChild(card);
}
