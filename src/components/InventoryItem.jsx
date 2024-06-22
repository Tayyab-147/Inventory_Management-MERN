import { Add, Delete } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { removeItem } from "../api";

const InventoryItem = ({ item, inventory, setInventory }) => {
  // const [quan]

  // const handleItemIncrement = async (id) => {
  //   try {
  //     // await removeItem(id);
  //     const choosenItem = inventory.find((item) => item._id === id);
  //     console.log(choosenItem);
  //     // setInventory(updatedInventory);
  //   } catch (error) {
  //     console.error("Failed to delete item", error);
  //   }
  // };

  const handleItemDelete = async (id) => {
    try {
      await removeItem(id);
      const updatedInventory = inventory.filter((item) => item._id !== id);
      setInventory(updatedInventory);
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };

  return (
    <Card
      sx={{
        paddingX: 1,
        marginY: 1,
        boxShadow: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>{item.title}</Typography>
        {/* <IconButton
        onClick={() => handleItemIncrement(item._id)}
        sx={{ marginLeft: "auto" }}
      >
        <Add />
      </IconButton> */}
        <IconButton
          onClick={() => handleItemDelete(item._id)}
          sx={{ marginLeft: "auto" }}
        >
          <Delete />
        </IconButton>
      </Box>
      <Typography sx={{ color: "grey", marginTop: -1, fontSize: 12 }}>
        Stock: {item.quantity}
      </Typography>
    </Card>
  );
};

export default InventoryItem;
