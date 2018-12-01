export class AppPagination extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this.template.innerHTML = render();
    this.page = 1;
    this.nodes;
    this.showStops = this.showStops.bind(this);
  }

  getNumbers(nodesLength) {
    const pages = Math.ceil(nodesLength / 5);
    const buttons = document.createElement("div");
    const arr = Array.from(Array(pages));
    arr.forEach((page = "", index) => {
      const button = this.getNumber(index + 1);
      buttons.appendChild(button);
    });
    this.shadowRoot.appendChild(buttons);
  }

  getNumber = number => {
    const button = document.createElement("button");
    button.onclick = this.setPage.bind(this, number);
    button.innerText = number.toString();
    return button;
  };

  setPage = number => {
    console.log("set page", number);
    this.page = number;
    this.showStops();
  };

  connectedCallback() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    const slot = this.shadowRoot.querySelector("slot");
    slot.addEventListener("slotchange", e => {
      this.nodes = e.target.assignedNodes();
      this.showStops();
      this.getNumbers(this.nodes.length);
    });
  }

  showStops() {
    this.nodes.forEach((node, i) => {
      if (i > 5 * this.page || i < 5 * this.page - 5) {
        node.style.display = "none";
      } else {
        node.style.display = "block";
      }
    });
  }
}

window.customElements.define("app-pagination", AppPagination);

function getStyle() {}

function render() {
  return `
  <slot/>
  
  `;
}
