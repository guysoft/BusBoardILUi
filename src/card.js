export class AppCard extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._greet = "hi";
    this._shadow.innerHTML = render(this._g);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "greet") {
      this._greet = newVal;
      this._shadow.innerHTML = render(this._greet);
    }
  }
}

AppCard.observedAttributes = ["greet"];

function render(greet) {
  return `
    <div class="card">
      <span>${greet}</span>
      <span>number</span>
      <span>time</span>
      <span>direction</span>
    </div>
    `;
}
