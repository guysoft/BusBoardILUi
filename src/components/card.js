 export class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set data(data) {
    this.shadowRoot.innerHTML = render(data);
  }

  set selected(value) {
    let card = this.shadowRoot.getElementById('card-body');
    (value == true) ? card.setAttribute('class', 'card selected-card'): card.setAttribute('class', 'card');
  }

  disconnectedCallback() {}
}

function render(data) {
  return `
    ${getStyles()}
    <div class="card" id="card-body">
      <div class="line-name">קו: ${data.line_name}</div>
      <div class="street">רחוב: ${data.stop_street}</div>
      <div class="estimation">הגעה: ${getEstimation(data.eta)}</div>
      <div class="destination">יעד: ${
        data.static_info.route.destination.name.HE
      }</div>
    </div>
    `;
}

function getStyles() {
  return `
  <style>
    .card {
      display: flex;
      flex-direction: column;
      text-align: right;
      align-content:space-between;
      padding: 1rem;
      background-clip: border-box;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
    }
    .selected-card{
      background-clip: border-box;
      box-shadow:0px 0px 5px 1px red;
    }
  </style>
  `;
}

function getEstimation(time) {
  const result = Date.parse(time) - Date.now();
  const minutes = Math.round(((result % 86400000) % 3600000) / 60000);
  return minutes;
}

window.customElements.define("app-card", AppCard);
