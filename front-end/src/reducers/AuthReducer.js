import { REGISTER_ACTION, SIGN_IN_ACTION, LOGOUT_ACTION } from '../types';

export default function(state = [], action) {
  switch(action.type) {
    case REGISTER_ACTION:
      return action.payload;
    case SIGN_IN_ACTION:
      return action.payload.data;
    case LOGOUT_ACTION:
      return [];
    default:
      return state;
  }
}
