export default class UpdatesService {
  constructor() {
    this.baseUrl = "https://busboardil.gnethomelinux.com/";
  }

  getBuses(lat, lon) {
    return new Promise((resolve, reject) => {
      this.makeRequest(`/data?lat=${lat}&lon=${lon}`)
        .then(response => resolve(response.json()))
        .catch(err => {
          throw err;
        });
    });
  }

  makeRequest(endpoint) {
    return fetch(this.baseUrl + endpoint);
  }
}
