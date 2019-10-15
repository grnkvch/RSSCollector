import {
  ADD_CONTENT,
} from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT: {
      const { content } = action.payload;
      return content;
    }
    default:
      return state;
  }
}