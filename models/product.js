import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hit: {
    type: Boolean,
    required: false,
  },
  new: {
    type: Boolean,
    required: false,
  },
});

export const ProductModel = mongoose.model("Product", ProductSchema);
