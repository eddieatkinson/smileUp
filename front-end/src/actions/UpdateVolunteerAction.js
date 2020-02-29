import { UPDATE_VOLUNTEER_ACTION } from "../types";
import axios from "axios";

export default function(volunteerInfo) {
  const axiosPromise = axios({
    url: `${window.apiHost}/updatevolunteer`,
    method: "POST",
    data: volunteerInfo
  });
  return {
    type: UPDATE_VOLUNTEER_ACTION,
    payload: axiosPromise
  };
}
