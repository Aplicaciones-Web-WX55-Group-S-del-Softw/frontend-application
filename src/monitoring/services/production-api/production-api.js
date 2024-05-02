import axios from "axios";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class ProductionApi {
    Url = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/production/productions';

    getProductions() {
        return http.get(`${this.Url}`);
    }


}