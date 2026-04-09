import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8080/api/report",
    withCredentials:true,
})

// post request
api.post(api)