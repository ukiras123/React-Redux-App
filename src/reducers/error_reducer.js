import { FETCH_ERROR } from "../actions/index";

export default function(state = { message: "" }, action) {
  switch (action.type) {
    case FETCH_ERROR:
      return { message: action.payload };
  }
  return state;
}
