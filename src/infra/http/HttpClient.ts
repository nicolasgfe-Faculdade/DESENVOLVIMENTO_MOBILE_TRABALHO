import axios from "axios";
import { ApiConfig } from "../../config/api";

const httpClient = axios.create({ 
    baseURL: ApiConfig.API,
})


export default httpClient
