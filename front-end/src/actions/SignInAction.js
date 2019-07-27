import { SIGN_IN_ACTION } from "../types";
import axios from 'axios';

export default function(input) {
  console.log('sign-in-action is running');
  const axiosPromise = axios({
    url: `${window.apiHost}/signin`,
    method: 'POST',
    data: input,
  });
  return {
    type: SIGN_IN_ACTION,
    payload: axiosPromise,
  }
}