import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "./actions.js";

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
        items: [...state.items].filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};
