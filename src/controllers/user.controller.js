import { userService } from '../services/user.service.js';

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).send({ status: 'success', payload: users });
    } catch (error) {
      console.error('Error in UserController getUsers:', error);
      res.status(500).send({ status: 'error', error: error.message || 'Internal Server Error' });
    }
  }
}

export const userController = new UserController();
