import productModel from '../models/product.model.js';

export default class ProductManager {
  async get() {
    try {
      return await productModel.find().lean();
    } catch (error) {
      console.error('Error in ProductManager get:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      return await productModel.findById(id).lean();
    } catch (error) {
      console.error('Error in ProductManager getById:', error);
      throw error;
    }
  }

  async create(product) {
    try {
      const newProduct = await productModel.create(product);
      return newProduct;
    } catch (error) {
      console.error('Error in ProductManager create:', error);
      throw error;
    }
  }

  async update(id, product) {
    try {
      return await productModel.findByIdAndUpdate(id, product, { new: true });
    } catch (error) {
      console.error('Error in ProductManager update:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return await productModel.findByIdAndDelete(id);
    } catch (error) {
      console.error('Error in ProductManager delete:', error);
      throw error;
    }
  }
}
