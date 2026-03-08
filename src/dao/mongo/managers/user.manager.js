import userModel from '../models/user.model.js';

export default class UserManager {
  async get() {
    try {
      return await userModel.find().lean();
    } catch (error) {
      console.error('Error in UserManager get:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      return await userModel.findById(id).lean();
    } catch (error) {
      console.error('Error in UserManager getById:', error);
      throw error;
    }
  }

  async create(user) {
    try {
      const newUser = await userModel.create(user);
      return newUser;
    } catch (error) {
      console.error('Error in UserManager create:', error);
      throw error;
    }
  }

  async update(id, user) {
    try {
      return await userModel.findByIdAndUpdate(id, user, { new: true });
    } catch (error) {
      console.error('Error in UserManager update:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return await userModel.findByIdAndDelete(id);
    } catch (error) {
      console.error('Error in UserManager delete:', error);
      throw error;
    }
  }
}
