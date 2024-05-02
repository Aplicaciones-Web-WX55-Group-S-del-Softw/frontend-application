import axios from "axios";

const http = axios.create({
});

export class WeatherApi {
    Url = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/weather/weathers';

    getWeathers() {
        return http.get(`${this.Url}`);
    }

}