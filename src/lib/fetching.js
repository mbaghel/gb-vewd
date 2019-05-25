import axios from "axios";

const appName = "vewd-test";

function getKey(regCode) {
  return axios.get(`/app/${appName}/get-result`, {
    params: { regCode, format: "json" }
  });
}

export { getKey };
