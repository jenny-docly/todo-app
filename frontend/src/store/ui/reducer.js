import { OPEN_MODAL, CLOSE_MODAL } from "./actions.js";

const initialState = {
  modalOpen: false
};

export const ui = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalOpen: true };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};
