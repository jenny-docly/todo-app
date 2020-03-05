import { OPEN_MODAL, CLOSE_MODAL, SEARCH_BY } from "./actions.js";

const initialState = {
  modal: {
    mode: "add",
    open: false,
    item: null
  },
  todolist: {
    searchString: ""
  }
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: true,
          mode: action.mode,
          item: action.item
        }
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: { ...state.modal, open: false }
      };
    case SEARCH_BY:
      return {
        ...state,
        todolist: { ...state.todolist, searchString: action.searchString }
      };
    default:
      return state;
  }
};
