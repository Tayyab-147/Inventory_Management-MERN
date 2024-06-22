const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { title, quantity } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const item = new Item({ title, quantity });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    await item.deleteOne();
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    console.error(`Error deleting item with ID ${id}:`, err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// router.put("/:id", async (req, res) => {
//   const {id, } = req.params;
//   try {
//     const item = await Item.findByIdAndUpdate()
//   }

// })

module.exports = router;
