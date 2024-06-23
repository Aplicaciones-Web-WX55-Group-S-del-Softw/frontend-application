
import axios from "axios";
import {authenticationInterceptor} from "../../register/services/authentication.interceptor.js";

const API_BASE_URL = "http://localhost:5066";

const http = axios.create({
    baseURL: API_BASE_URL,
});

// Set default headers
http.defaults.headers.common['Content-Type'] = 'application/json';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Add authentication interceptor
http.interceptors.request.use(authenticationInterceptor);

export default http;
