export class AppPagination extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this.template.innerHTML = render();
    this.page = 1;
  }

  getNumbers(nodesLength) {
    const pages = nodesLength / 5;
    const pagination = document.createElement("div");
    pagination.innerHTML = `${Array.from(Array(pages).keys())
      .map(page => getNumber(page))
      .toString()}`;
  }

  getNumber = number => {
    return `<button onclick="this.setPage(number)">number</button>`;
  };

  setPage = number => {
    this.page = number;
  };

  connectedCallback() {
    // debugger;
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    const slot = this.shadowRoot.querySelector("slot");
    slot.addEventListener("slotchange", e => {
      const nodes = e.target.assignedNodes();

      nodes.forEach((node, i) => {
        if (i > 5 * this.page) {
          node.style.display = "none";
        }
      });
      console.log(nodes);
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
