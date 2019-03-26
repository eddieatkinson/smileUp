import { GET_VOLUNTEER_INFO } from "../types";
import axios from 'axios';

export default function() {
  const url = `${window.apiHost}/volunteerinfo`;
  const axiosPromise = axios.get(url);
  return {
    type: GET_VOLUNTEER_INFO,
    payload: axiosPromise,
  }
}