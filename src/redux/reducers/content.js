import {
  FETCH_CONTENT,
  FETCH_SOURCE,
  ADD_CONTENT,
  ADD_SOURCE,
  TOGGLE_SOURCE
} from "../actionTypes";

const initialState = {
  content: [],
  sources: new Map(),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT: {
      const { content } = action.payload;
      return {
        ...state,
        content,
      };
    }
    case ADD_SOURCE: {
      const { sources } = state;
      const { sourceList } = action.payload;

      return {
        ...state,
        sources: new Map([
          ...sources,
          ...sourceList.map(item => [item, true]),
        ])
      };
    }
    case TOGGLE_SOURCE: {
      const { sources } = state;
      const { source } = action.payload;

      const newList = new Map(sources);

      newList.set(source, !newList.get(source));

      return {
        ...state,
        sources: newList,
      };
    }
    default:
      return state;
  }
}