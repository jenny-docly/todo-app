/**
 * API endpoint.
 */
export const BASE_URL = "http://localhost:8080/api/v1/todo";

export const getItems = () => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/items", {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

export const deleteItem = id => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/item/" + id, {
      method: "DELETE"
    })
      .then(() => resolve())
      .catch(error => reject(error));
  });
};

export const postItem = payload => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(response => (response.ok ? resolve(response.json()) : reject()))
      .catch(error => reject(error));
  });
};
