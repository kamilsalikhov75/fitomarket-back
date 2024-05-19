import { ProductModel } from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const doc = new ProductModel({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      price: req.body.price,
      hit: req.body.hit,
      new: req.body.new,
    });

    const product = await doc.save();

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать товар",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить товары",
    });
  }
};

export const getNewProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({ new: true });

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить товары",
    });
  }
};

export const getHitProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({ hit: true });

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить товары",
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await ProductModel.findById(productId);

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось найти товар",
    });
  }
};
