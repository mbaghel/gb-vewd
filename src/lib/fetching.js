import axios from "axios";
import { appName } from "./config";

const apiInstance = axios.create({
  baseURL: "/api/",
  params: {
    format: "json"
  }
});

function getKey(regCode) {
  return axios.get(`/app/${appName}/get-result`, {
    params: { regCode, format: "json" }
  });
}

export { getKey, apiInstance };
