
import axios from 'axios';
import qs from 'qs';

export default class UpdatesService {
    constructor() {
        this.baseUrl = 'https://busboardil.gnethomelinux.com/';
    }

    getBuses(lat, lon) {
        return new Promise((resolve, reject) => {
            this.makeRequest('/data', {lat, lon}).then(response => resolve(response.data)).catch(reject);
        });
    }

    makeRequest(endpoint, parameters) {
        return axios.get(this.baseUrl + endpoint + '?' + qs.stringify(parameters));
    }
}

