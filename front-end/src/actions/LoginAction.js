import { LOGIN_ACTION } from "../types";

export default function(input) {
  console.log('LoginAction is running...');
  return {
    type: LOGIN_ACTION,
    payload: input * 2,
  }
}
