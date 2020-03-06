export const SET_ITEMS = "SET_ITEMS";
export const SET_ITEM_COUNT = "SET_ITEM_COUNT";
export const ITEMS_MODIFIED = "ITEMS_MODIFIED";
export const UPDATE_OFFSET = "UPDATE_OFFSET";

export const setItems = items => ({
  type: SET_ITEMS,
  items: items
});

export const itemsModified = () => ({
  type: ITEMS_MODIFIED
});

export const setItemCount = count => ({
  type: SET_ITEM_COUNT,
  count: count,
});

export const updatePageOffset = offset => ({
  type: UPDATE_OFFSET,
  offset: offset
});
