export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getProducts() {
    try {
      return await this.dao.get();
    } catch (error) {
      console.error('Error in ProductRepository getProducts:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      return await this.dao.getById(id);
    } catch (error) {
      console.error('Error in ProductRepository getProductById:', error);
      throw error;
    }
  }

  async createProduct(productData) {
    try {
      return await this.dao.create(productData);
    } catch (error) {
      console.error('Error in ProductRepository createProduct:', error);
      throw error;
    }
  }

  async updateProduct(id, productData) {
    try {
      return await this.dao.update(id, productData);
    } catch (error) {
      console.error('Error in ProductRepository updateProduct:', error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      return await this.dao.delete(id);
    } catch (error) {
      console.error('Error in ProductRepository deleteProduct:', error);
      throw error;
    }
  }
}
