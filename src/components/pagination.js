export class AppPagination extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this.template.innerHTML = render();
    this.page = 1;
    this.pageSize = 6;
    this.selectionTimout = 1500;
    this.nodes;
    this.showStops = this.showStops.bind(this);
    this.showActiveBus =  this.showActiveBus.bind(this);
    this.activeBuss = 0; 
  }

  createPageButtons(nodesLength) {
    const pages = Math.ceil(nodesLength / this.pageSize);
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
    this.page = number;
    this.showStops();
  };

  connectedCallback() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    const slot = this.shadowRoot.querySelector("slot");
    slot.addEventListener("slotchange", e => {
      this.nodes = e.target.assignedNodes();
      this.showStops();
      this.createPageButtons(this.nodes.length);
      setInterval(this.showActiveBus, this.selectionTimout);
    });
    
  }

  showStops() {
    this.nodes.forEach((node, i) => {
      if (i > this.pageSize * this.page || i <= this.pageSize * this.page - this.pageSize) {
        node.style.display = "none";
      } else {
        node.style.display = "block";
      }
    });
  }

  showActiveBus(){
    if(this.activeBuss > 0) this.nodes[this.activeBuss - 1].selected = false;
    this.nodes[this.activeBuss].selected = true;    
    this.activeBuss++;
    console.log('activeBuss : ', this.activeBuss)
    if(this.activeBuss - 1 > this.pageSize * this.page){
      this.page++
      this.setPage(this.page);
    } else {
    } 
  }
}

window.customElements.define("app-pagination", AppPagination);

function getStyle() {}

function render() {
  return `
  <slot/>
  
  `;
}
