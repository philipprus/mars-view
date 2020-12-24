import axios from "axios";
import { API_ROOT, API_KEY } from "./constants";

export function makeEndPoint(endPoint) {
    return `${API_ROOT}${endPoint}`
  }
  
  export function getDataAsync(ApiEndpoint, action) {
    const endpoint = makeEndPoint(ApiEndpoint);
    return axios.get(endpoint, {
        params: { ...action, api_key:API_KEY },
    });
  }