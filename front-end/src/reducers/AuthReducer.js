import { LOGIN_ACTION, REGISTER_ACTION } from '../types';

export default function(state = [], action) {
  switch(action.type) {
    case LOGIN_ACTION:
      return action.payload;
    case REGISTER_ACTION:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
