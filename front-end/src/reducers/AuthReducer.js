import { LOGIN_ACTION, REGISTER_ACTION, SIGN_IN_ACTION } from '../types';

export default function(state = [], action) {
  switch(action.type) {
    case LOGIN_ACTION:
      return action.payload;
    case REGISTER_ACTION:
      return action.payload;
    case SIGN_IN_ACTION:
      return action.payload;
    default:
      return state;
  }
}
