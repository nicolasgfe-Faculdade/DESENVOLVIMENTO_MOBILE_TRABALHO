import { ApiConfig } from "../../config/api";
import httpClient from "../../infra/http/HttpClient";
import { Categories } from "../model";

export const getHeadlines = async (): Promise<Categories[]> => {
    const response = await httpClient.get<80671>(ApiConfig.API)
    return response.data.
}
