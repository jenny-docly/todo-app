import { ADD_ITEM, DELETE_ITEM, SET_ITEMS, UPDATE_ITEM } from "./actions.js";

const initialState = {
  items: []
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        items: action.items
      };
    case ADD_ITEM:
      return {
        items: [...state.items, action.item]
      };
    case DELETE_ITEM:
      return {
        items: state.items.filter(item => item.id !== action.id)
      };
    case UPDATE_ITEM:
      return {
        items: state.items.map(item =>
          item.id === action.item.id ? action.item : item
        )
      };
    default:
      return state;
  }
};
