const express = require("express");
const HttpStatus = require("http-status-codes");

const {
  createItem,
  getItems,
  deleteItem,
  updateItem
} = require("./model/items.js");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const port = 8080;

const baseUrl = "/api/v1/todo";

app.post(baseUrl + "/item", async (req, res) => {
  const item = {
    title: req.body.title,
    description: req.body.description,
  };
  if (item.title) {
    try {
      const id = await createItem(item);
      res.status(HttpStatus.CREATED).json({ id });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        errorMessage: `Something went wrong when creating item: ${item.title}`
      });
    }
  } else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ errorMessage: "Wrong usage, title is missing in body." });
  }
});

app.put(baseUrl + "/item/:id", async (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  };

  if (!isNaN(itemId) && item) {
    try {
      const updated = await updateItem(itemId, item);
      if (updated) {
        res.status(HttpStatus.OK).send();
      } else {
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ errorMessage: `Could not update item with ${itemId}. Does the item exist?` });
      }
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        errorMessage: `Something went wrong when updating item: ${JSON.stringify(
          item
        )}`
      });
    }
  } else {
    res.status(HttpStatus.BAD_REQUEST).json({
      errorMessage: isNaN(itemId)
        ? "Wrong usage, no valid item id in api path."
        : "Wrong usage, no item in body."
    });
  }
});

app.get(baseUrl + "/items", async (req, res) => {
  try {
    const items = await getItems(req.query);
    res.status(HttpStatus.OK).json(items);
  } catch (error) {
    console.log(error);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ errorMessage: "Something went wrong when retrieving items" });
  }
});

app.delete(baseUrl + "/item/:id", async (req, res) => {
  const itemId = parseInt(req.params.id);
  if (!isNaN(itemId)) {
    try {
      const deleted = await deleteItem(itemId);
      if (deleted) {
        res.status(HttpStatus.OK).send();
      } else {
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ errorMessage: `Item with ${itemId} does not exist.` });
      }
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        errorMessage: `Something went wrong when deleting item with id: ${itemId}`
      });
    }
  } else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ errorMessage: "Wrong usage, no valid item id in api path." });
  }
});

app.listen(port, () =>
  console.log(`Server is ready. Listening on port ${port}!`)
);
