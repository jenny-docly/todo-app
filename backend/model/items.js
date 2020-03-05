const { client } = require("../database.js");

const QUERY_SEARCH = "SELECT * FROM todo.items WHERE title ILIKE $1";
const QUERY_ALL = "SELECT * FROM todo.items";

const createItem = ({ title, description }) => {
  return new Promise((resolve, reject) => {
    client
      .query(
        "INSERT INTO todo.items(title, description) VALUES($1, $2) RETURNING id",
        [title, description]
      )
      .then(result => resolve(result.rows[0].id))
      .catch(error => reject(error));
  });
};

const updateItem = (id, { title, description, completed }) => {
  return new Promise((resolve, reject) => {
    client
      .query(
        "UPDATE todo.items SET title = $1, description = $2, completed = $3 WHERE todo.items.id = $4",
        [title, description, completed, id]
      )
      .then(result => resolve(result.rowCount == 1))
      .catch(error => reject(error));
  });
};

const deleteItem = itemId => {
  return new Promise((resolve, reject) => {
    client
      .query(`DELETE FROM todo.items WHERE todo.items.id = ${itemId}`)
      .then(result => resolve(result.rowCount == 1))
      .catch(error => reject(error));
  });
};

const getItems = searchBy => {
  return new Promise((resolve, reject) => {
    const query = searchBy ? QUERY_SEARCH : QUERY_ALL;
    const params = searchBy ? [`%${searchBy}%`] : [];
    client
      .query(query, params)
      .then(result => resolve(result.rows))
      .catch(error => reject(error));
  });
};

module.exports = {
  createItem,
  getItems,
  deleteItem,
  updateItem
};
