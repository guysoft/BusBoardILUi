export class AppCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: "open" });

    var s = document.createElement("span");
    s.innerText = "hello world!";
    shadow.appendChild(s);
  }
}
