import { GET_VOLUNTEER_INFO, DELETE_VOLUNTEER_ACTION, SIGN_UP_ACTION } from '../types';

export default function(state=[], action) {
  switch(action.type) {
    case GET_VOLUNTEER_INFO:
      return action.payload.data;
    case DELETE_VOLUNTEER_ACTION:
      return action.payload.data;
    case SIGN_UP_ACTION:
      return action.payload.data;
    default:
      return state;
  }
}
