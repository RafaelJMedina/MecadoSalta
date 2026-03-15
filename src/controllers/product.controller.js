import { productService } from '../services/product.service.js';

class ProductController {
  async getProducts(req, res) {
    try {
      const products = await productService.getProducts();
      res.status(200).send({ status: 'success', payload: products });
    } catch (error) {
      console.error('Error en ProductController getProducts:', error);
      res.status(500).send({ status: 'error', error: error.message || 'Error interno del servidor' });
    }
  }

  async createProduct(req, res) {
    try {
      const productData = req.body;
      const user = req.user; // Podría no existir dependiendo del middleware
      
      if (!productData.title || !productData.description || !productData.code || !productData.price || !productData.stock || !productData.category) {
        return res.status(400).send({ status: 'error', error: 'Faltan campos obligatorios' });
      }

      const newProduct = await productService.createProduct(productData, user);
      res.status(201).send({ status: 'success', payload: newProduct });
    } catch (error) {
      console.error('Error en ProductController createProduct:', error);
      res.status(500).send({ status: 'error', error: error.message || 'Error interno del servidor al crear producto' });
    }
  }
}

export const productController = new ProductController();
