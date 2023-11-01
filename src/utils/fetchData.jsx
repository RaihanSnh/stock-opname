import axios from 'axios';

export class fetchDataService {
    constructor(url) {
        this.url = url;
    }

    fetchData() {
        return axios.get(this.url, {});
    }
}