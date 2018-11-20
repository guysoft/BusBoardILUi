import { AppCard } from "./card";
console.log("hello world");
window.customElements.define("app-card", AppCard);
var body = document.querySelector("body");
var card = document.createElement("app-card");
body.appendChild(card);
