export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SEARCH_BY = "SEARCH_BY";

export const searchBy = searchString => ({
  type: SEARCH_BY,
  searchString: searchString
});

export const openModal = (mode, item) => ({
  type: OPEN_MODAL,
  mode: mode,
  item: item
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
