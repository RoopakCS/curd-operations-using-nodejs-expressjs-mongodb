import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Display all products
router.get("/", getProducts);

// Display product by id
router.get("/:id", getProduct);

// Create a product
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

export default router;
