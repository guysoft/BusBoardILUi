export default class UpdatesService {
  constructor() {
    this.baseUrl = "https://busboardil.gnethomelinux.com/";
  }

  getBuses(lat, lon) {
    return this.makeRequest(`/data?lat=${lat}&lon=${lon}`)
      .then(this.validateResponse)
      .then(this.readResponseAsJson)
      .catch(this.logError);
  }

  readResponseAsJson(res) {
    return res.json();
  }

  validateResponse(res) {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  }

  logError(err) {
    console.error(err);
  }

  makeRequest(endpoint) {
    return fetch(this.baseUrl + endpoint);
  }
}
