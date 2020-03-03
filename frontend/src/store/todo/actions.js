export const ADD_ITEM = "ADD_ITEM";
export const SET_ITEMS = "SET_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const setItems = items => ({
  type: SET_ITEMS,
  items: items
});

export const addItem = item => ({
  type: ADD_ITEM,
  item: item
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  id: id
});

export const updateItem = (id, item) => ({
  type: UPDATE_ITEM,
  id: id,
  item: item
});
