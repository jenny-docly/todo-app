import {
  SET_ITEMS,
  SET_ITEM_COUNT,
  ITEMS_MODIFIED,
  UPDATE_OFFSET,
  SEARCH_BY
} from "./actions.js";

const initialState = {
  itemCount: 0,
  items: [],
  stale: false,
  paging: {
    pageSize: 10,
    offset: 0
  },
  searchString: ""
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
        stale: false
      };
    case SET_ITEM_COUNT:
      return {
        ...state,
        itemCount: action.count
      };
    case ITEMS_MODIFIED:
      return {
        ...state,
        stale: true
      };
    case UPDATE_OFFSET:
      return {
        ...state,
        paging: { ...state.paging, offset: action.offset }
      };
    case SEARCH_BY:
      return {
        ...state,
        paging: { ...state.paging, offset: 0 },
        searchString: action.searchString
      };
    default:
      return state;
  }
};
