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

function saveTime(user, id, time) {
  return apiInstance.get("video/save-time/", {
    params: {
      api_key: user,
      video_id: id,
      time_to_save: time
    }
  });
}

export { getKey, apiInstance, saveTime };
