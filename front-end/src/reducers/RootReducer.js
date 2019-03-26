import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VolunteersReducer from './VolunteersReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  volunteerInfo: VolunteersReducer,
});

export default rootReducer;
