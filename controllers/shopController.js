import Item from "../model/shopModel.js";

export const addProduct =   async (req, res) => {
    console.log(req.body);
    const { name, price, description } = req.body;
    const newItem = new Item({
      name,
      price,
      description,
    });
    await newItem.save();
    console.log(newItem);
    res
      .status(201)
      .json({ message: "New item added successfully!", item: newItem });
  };

export const getProduct = async (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({
        message: "Item not found",
      });
    } else {
      res.send("Getting ITEM DATA successfully!");
    }
  };

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({
        message: "Item not found",
      });
    } else {
      deleteItem(id);
      res.status(200).json({
        message: "Item deleted successfully",
      });
    }
  };

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, price, description } = req.body;
    if (!id) {
      res.status(404).json({
        message: "Item not found",
      });
    } else {
      updateItem(id);
      res.status(200).json({
        message: "Item updated successfully",
      });
    }
  };

export const partialUpdateProduct = async (req, res) => {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      res.status(400).json({
        message: "Please enter all the fields",
      });
    } else {
      updateItem(id);
      res.send("Item updated successfully!");
    }
  };