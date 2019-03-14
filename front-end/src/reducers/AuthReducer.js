import { LOGIN_ACTION } from '../types';

export default function(state = [], action) {
  switch(action.type) {
    case LOGIN_ACTION:
      return action.payload.data;
    default:
      return state;
  }
}
