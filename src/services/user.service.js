import { users as userDAO } from '../dao/factory.js';
import UserRepository from '../repositories/user.repository.js';

const userRepository = new UserRepository(userDAO);

class UserService {
  async getAllUsers() {
    try {
      return await userRepository.getUsers();
    } catch (error) {
      console.error('Error in UserService getAllUsers:', error);
      throw error;
    }
  }
}

export const userService = new UserService();
