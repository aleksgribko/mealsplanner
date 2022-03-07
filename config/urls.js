import {API_URL, API_URL_DEV} from "@env";

let apiUrl;

if (__DEV__) {
  apiUrl = API_URL_DEV;
} else {
  apiUrl = API_URL;
}

export default {
  apiUrl
};
