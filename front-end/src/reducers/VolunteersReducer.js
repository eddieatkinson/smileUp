import { GET_VOLUNTEER_INFO } from '../types';

export default function(state=[], action) {
  switch(action.type) {
    case GET_VOLUNTEER_INFO:
      return action.payload.data;
    default:
      return state;
  }
}
