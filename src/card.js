export class AppCard extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._greet = "hi";
    this._shadow.innerHTML = render();
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "greet") {
      this._greet = newVal;
      this._shadow.innerHTML = render(this._greet);
    }
    if (attrName === "data") {
      console.log("bus data:", newVal);
      if (newVal) {
        const data = JSON.parse(newVal);
        this._shadow.innerHTML = render(data);
      }
    }
  }
}

AppCard.observedAttributes = ["greet", "data"];

function render(data) {
  return data
    ? `
    <div class="card">
      <div>קו: ${data.line_name}</div>
      <div>רחוב: ${data.stop_street}</div>
      <div>הגעה: ${getEstimation(data.eta)}</div>
      <div>יעד: ${data.static_info.route.destination.name.HE}</div>
    </div>
    `
    : `<div>Loading...</div>`;
}

function getEstimation(time) {
  const result = Date.parse(time) - Date.now();
  const minutes = Math.round(((result % 86400000) % 3600000) / 60000);
  return minutes;
}
