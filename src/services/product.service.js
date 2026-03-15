import { products as productDAO } from '../dao/factory.js';
import ProductRepository from '../repositories/product.repository.js';

const productRepository = new ProductRepository(productDAO);

class ProductService {
  async getProducts() {
    try {
      return await productRepository.getProducts();
    } catch (error) {
      console.error('Error in ProductService getProducts:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      return await productRepository.getProductById(id);
    } catch (error) {
      console.error('Error in ProductService getProductById:', error);
      throw error;
    }
  }

  async createProduct(productData, user) {
    try {
      // Determinamos el owner del producto según el rol del usuario
      const owner = user && user.role === 'premium' ? user.email : 'admin';
      
      const newProductData = {
        ...productData,
        owner
      };

      return await productRepository.createProduct(newProductData);
    } catch (error) {
      console.error('Error in ProductService createProduct:', error);
      throw error;
    }
  }

  async updateProduct(id, productData) {
    try {
      return await productRepository.updateProduct(id, productData);
    } catch (error) {
      console.error('Error in ProductService updateProduct:', error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      return await productRepository.deleteProduct(id);
    } catch (error) {
      console.error('Error in ProductService deleteProduct:', error);
      throw error;
    }
  }
}

export const productService = new ProductService();
