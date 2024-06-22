const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
});

module.exports = mongoose.model("Item", ItemSchema);
