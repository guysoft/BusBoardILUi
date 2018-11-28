import { AppCard } from "./card";
import UpdatesService from "./updatesService";
import response from "./mock";

window.customElements.define("app-card", AppCard);
var body = document.querySelector("body");

const updatesService = new UpdatesService();

updatesService.getBuses("32.0744198", "34.795655200000056").then(stops => {
  Object.keys(stops).forEach(stopName => {
    bus = stops[stopName].forEach(busData => {
      addBusCard(busData);
    });
  });
});

function addBusCard(busData) {
  var card = document.createElement("app-card");
  card.setAttribute("data", JSON.stringify(busData));
  body.appendChild(card);
}
