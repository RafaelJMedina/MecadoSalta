import UserDTO from '../dto/user.dto.js';

export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getUsers() {
    try {
      const users = await this.dao.get();
      // Transform each user using the UserDTO
      return users.map(user => new UserDTO(user));
    } catch (error) {
      console.error('Error in UserRepository getUsers:', error);
      throw error;
    }
  }
}
