import { AppCard } from "./components/card";
import { AppPagination } from "./components/pagination";
import { AppInfo } from "./components/info";
import UpdatesService from "./updatesService";
import response from "./mock";
import { stringify } from "querystring";

// var body = document.querySelector("body");
// var container = document.createElement("div");
// container.setAttribute("class", "container");
// body.appendChild(container);

// const updatesService = new UpdatesService();

// updatesService.getBuses("32.0744198", "34.795655200000056").then(stops => {
//   createBusCards(stops);
// });

var container = document.querySelector(".container");
var pagination = document.createElement("app-pagination");
var info = document.createElement("app-info");
container.appendChild(pagination);
container.appendChild(info);
let bussesCount = 0;
let busses = [];
let activeBus;
createBusCards(response);
pagination.elementsLength = bussesCount;
addInfo();

const engine = document.querySelector('app-pagination');
engine.addEventListener('showActiveBusOut', activeBussHandler);

function activeBussHandler(ev){
  activeBus = ev.srcElement.activeBus;
  let stringified = JSON.stringify(busses[activeBus]); 
  info.data = stringified;
}

function createBusCards(stops) {
  Object.keys(stops).forEach(stopName => {
    stops[stopName].forEach(busData => {
      addBusCard(busData);
      bussesCount++;
      busses.push(busData);
    });
  });

}
function addInfo(){
  var info = document.createElement("app-info");
  pagination.appendChild(info);
}

function addBusCard(busData) {
  var card = document.createElement("app-card");
  card.data = busData;
  pagination.appendChild(card);
}

