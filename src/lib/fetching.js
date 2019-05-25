import axios from "axios";

const appName = "vewd-test";
const videoTypeID = 2300;

const api = axios.create({
  baseURL: "/api/",
  params: {
    format: "json"
  }
});

function getVideos(options) {
  return api.get("videos/", {
    params: {
      limit: 24,
      field_list: "id,name,deck",
      ...options
    }
  });
}

function getUrls({ id, ...rest }) {
  return api.get(`video/${videoTypeID}-${id}/`, {
    params: {
      field_list: "hd_url,high_url,low_url,saved_time",
      ...rest
    }
  });
}

function getKey(regCode) {
  return axios.get(`/app/${appName}/get-result`, {
    params: { regCode, format: "json" }
  });
}

export { getKey, getVideos, getUrls };
