
## `API documentation`

#### `GET /items`

Get a list of todo items. The selection is dependant on the query params.


Example request:

```html
 http://localhost:8080/api/v1/todo/items?searchBy="fruit"
```

##### Accepted query params

* searchBy


Example response:

```json
 [
  {
    "id": 1,
    "title": "A new todo item",
    "description": "The description of the new item",
    "completed": false
  },
  {
    "id": 2,
    "title": "A new todo item",
    "description": "The description of the new item",
    "completed": false
  },
  {
    "id": 3,
    "title": "A new todo item",
    "description": "The description of the new item",
    "completed": true
  },
 ];
```

#### `POST /item`

Creates a new todo item, returns the id of created item in the response body.

```json
 {
  "title": "A new todo item",
  "description": "The description of the new item"
 };
```

#### `PUT /item/<id>`

Updates an existing item.

#### `DELETE /item/<id>`

Deletes an existing item.
