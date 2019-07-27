import { DELETE_VOLUNTEER_ACTION } from "../types";
import axios from 'axios';

export default function(input) {
  console.log('DELETE_VOLUNTEER_ACTION is running');
  const axiosPromise = axios({
    url: `${window.apiHost}/deletevolunteer`,
    method: 'POST',
    data: input,
  });
  return {
    type: DELETE_VOLUNTEER_ACTION,
    payload: axiosPromise,
  }
}