const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const inventoryRouter = require("./routes/Inventory");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/inventory", inventoryRouter);

mongoose
  .connect(process.env.mongo_URI)
  .then(console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
