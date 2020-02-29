import { REGISTER_ACTION } from "../types";
import axios from "axios";

export default function(input) {
  const axiosPromise = axios({
    url: `${window.apiHost}/register`,
    method: "POST",
    data: input
  });
  return {
    type: REGISTER_ACTION,
    payload: axiosPromise
  };
}
