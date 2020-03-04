import { OPEN_MODAL, CLOSE_MODAL } from "./actions.js";

const initialState = {
  modal: {
    mode: "add",
    open: false,
    item: null
  }
};

export const ui = (state = initialState, action) => {
  console.log("action", action);
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
    default:
      return state;
  }
};
