import axios from "axios";

const http = axios.create({
});

export class EmergencyApi {
    Url = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/emergency-db/emergencyData';

    getData() {
        return http.get(`${this.Url}`);
    }

}