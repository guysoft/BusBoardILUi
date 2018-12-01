import { AppCard } from "./components/card";
import { AppPagination } from "./components/pagination";
import UpdatesService from "./updatesService";
import response from "./mock";

// var body = document.querySelector("body");
// var container = document.createElement("div");
// container.setAttribute("class", "container");
// body.appendChild(container);

// const updatesService = new UpdatesService();

// updatesService.getBuses("32.0744198", "34.795655200000056").then(stops => {
//   createBusCards(stops);
// });

var container = document.querySelector(".container");
console.log(container);
var pagination = document.createElement("app-pagination");
container.appendChild(pagination);
let busses = 0;
createBusCards(response);
pagination.elementsLength = busses;

function createBusCards(stops) {
  Object.keys(stops).forEach(stopName => {
    stops[stopName].forEach(busData => {
      addBusCard(busData);
      busses++;
    });
  });
}

function addBusCard(busData) {
  var card = document.createElement("app-card");
  card.data = busData;
  pagination.appendChild(card);
}
