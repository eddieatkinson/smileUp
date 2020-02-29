import { REGISTER_ACTION, SIGN_IN_ACTION, LOGOUT_ACTION } from "../types";

const INITIAL_STATE = {
  registerMsg: "",
  msg: "",
  token: null,
  name: "",
  statusId: null,
  logoutPayload: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_ACTION:
      return { ...state, registerMsg: action.payload.data.msg };
    case SIGN_IN_ACTION:
      return {
        ...state,
        msg: action.payload.data.msg,
        token: action.payload.data.token,
        name: action.payload.data.name,
        statusId: action.payload.data.statusId
      };
    case LOGOUT_ACTION:
      return [];
    default:
      return state;
  }
}
