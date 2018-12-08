export class AppInfo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.busInfo;
      render = render.bind(this);
      this.shadowRoot.innerHTML = render(); 
    }

    set data(data) {
      data = JSON.parse(data);
      this.shadowRoot.innerHTML = render(data);
    }
  
    disconnectedCallback() {}
  }
  
  function render(data) {
    if(!data) return getEmptyInfo();
    let dateStr = getDate(data.timestamp);
    return `
      ${getStyles()}     
      <div class="info" >
        <h1>Information</h1>
        <div class="line-name">קו: ${data.line_name}</div>
        <div class="agency">סוכנות: ${data.static_info.route.agency.name.HE} </div>
        <div class="stop-time">זמן צפוי: ${dateStr}</div>
        <div class="stop-street">שם הרחוב: ${data.stop_street} </div>
        <div class="stop-name">תחנה: ${data.stop_name} </div>
      `;
  }

  function getDate(date){
    let dateStr = date.match(/\s\d\d:\d\d/)[0];

    console.log(dateStr)
    return dateStr; 

  }

  function getEmptyInfo(){
    return `
      ${getStyles()}
      <div class = "info">
      <h1>Information</h1>
        No Connection
      </div>
    `
  }
  
  function getStyles() {
    return `
    <style>
        h1{
          text-align:center;
        }
        .info{
          margin-right:1rem;
          text-align: right;
          padding:  1rem;
          background-clip: border-box;
          box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
        }
    </style>
    `;
  }
  

  
  window.customElements.define("app-info", AppInfo);
  