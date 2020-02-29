import { SIGN_UP_ACTION } from "../types";
import axios from "axios";

export default function(input) {
  const axiosPromise = axios({
    url: `${window.apiHost}/signup`,
    method: "POST",
    data: input
  });
  return {
    type: SIGN_UP_ACTION,
    payload: axiosPromise
  };
}
