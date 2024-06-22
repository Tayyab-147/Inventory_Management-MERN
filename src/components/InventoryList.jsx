import { Box, Button, Divider, Input, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { addItem, getInventory } from "../api";
import InventoryIndividual from "./InventoryItem";

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");

  useEffect(() => {
    const fetchInventory = async () => {
      const inventory = await getInventory();
      setInventory(inventory);
    };
    fetchInventory();
  }, []);

  const handleAddItem = async () => {
    if (newItemTitle && newItemQuantity > 0) {
      const addedItem = await addItem(newItemTitle, newItemQuantity);
      setInventory((prevInventory) => [...prevInventory, addedItem]);
      setNewItemTitle("");
      setNewItemQuantity("");
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Input
          type="text"
          value={newItemTitle}
          placeholder="Item Title"
          onChange={(e) => setNewItemTitle(e.target.value)}
          sx={{
            width: { md: "250px", xs: "170px" },
            border: "1px solid #ccc",
            paddingX: 1,
          }}
        />
        <Input
          type="number"
          value={newItemQuantity}
          placeholder="Quantity"
          onChange={(e) => setNewItemQuantity(e.target.value)}
          sx={{
            marginLeft: 1,
            width: "100px",
            border: "1px solid #ccc",
            paddingX: 1,
          }}
        />
        <Button
          variant="contained"
          onClick={handleAddItem}
          sx={{ marginLeft: 1 }}
        >
          Add
        </Button>
      </Box>
      <Box sx={{ marginTop: 2, padding: 1 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Inventory
        </Typography>
        {inventory &&
          inventory.map((item, index) => (
            <InventoryIndividual
              key={index}
              item={item}
              setInventory={setInventory}
              inventory={inventory}
            />
          ))}
      </Box>
    </>
  );
};

export default InventoryList;
