import {
  GET_VOLUNTEER_INFO,
  DELETE_VOLUNTEER_ACTION,
  SIGN_UP_ACTION,
  UPDATE_VOLUNTEER_ACTION
} from "../types";

const INITIAL_STATE = {
  volunteerInfo: [],
  msg: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_VOLUNTEER_INFO:
      return { ...state, volunteerInfo: action.payload.data };
    case DELETE_VOLUNTEER_ACTION:
      return { ...state, volunteerInfo: action.payload.data };
    case SIGN_UP_ACTION:
      return { ...state, msg: action.payload.data.msg };
    case UPDATE_VOLUNTEER_ACTION:
      return { ...state, msg: action.payload.data.msg };
    default:
      return state;
  }
}
