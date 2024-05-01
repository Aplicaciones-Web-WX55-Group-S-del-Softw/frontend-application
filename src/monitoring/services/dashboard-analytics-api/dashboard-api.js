import axios from "axios";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class DashboardApi {
    Url = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/dashboard-analytics/tasks';

    getTasks() {
        return http.get(`${this.Url}`);
    }

    createTask(task) {
        return http.post(`${this.Url}`, task);
    }
}