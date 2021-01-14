import Axios from "axios";
import * as ApiConstants from "./apiUrlConstants";

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const AxiosInstance = Axios.create({
  baseURL: ApiConstants.BASE_URL,
  headers,
});
