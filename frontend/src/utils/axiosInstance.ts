import axios from "axios";

axios.defaults.withCredentials = true

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000
})

export default axiosInstance