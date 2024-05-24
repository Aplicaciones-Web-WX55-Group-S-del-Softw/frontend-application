import axios from "axios";

const http = axios.create({
});

export class FarmApi {
    Url = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/api-farms/farms';

    getFarms() {
        return http.get(`${this.Url}`);
    }

    getFarmById(id) {
        return axios.get(`${this.url}/farm-${id}`);
    }

}