
import {
  ADD_SOURCE,
  TOGGLE_SOURCE
} from "../actionTypes";

const initialState = new Map();

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SOURCE: {
      const { sourceList } = action.payload;

      return new Map([
        ...state,
        ...sourceList.map(item => [item, true]),
      ])
    }
    case TOGGLE_SOURCE: {
      const { source } = action.payload;

      const newList = new Map(state);

      newList.set(source, !newList.get(source));

      return newList
    }
    default:
      return state;
  }
}