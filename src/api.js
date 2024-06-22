import axios from "axios";

const API_URL = "http://localhost:5000/inventory";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getInventory = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    throw error;
  }
};

export const addItem = async (text, value) => {
  try {
    const response = await axios.post(
      API_URL,
      { title: text, quantity: value },
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

export const removeItem = async (id) => {
  if (!id) {
    console.error("Invalid ID: ID is undefined or null");
    throw new Error("Invalid ID: ID is undefined or null");
  }

  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error removing item with ID ${id}:`, error);
    throw error;
  }
};
