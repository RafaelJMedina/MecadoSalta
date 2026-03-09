import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import UserMongoManager from './mongo/managers/user.manager.js';
import ProductMongoManager from './mongo/managers/product.manager.js';

dotenv.config();

let UserManager;
let ProductManager;

const persistence = process.env.PERSISTENCE;

switch (persistence) {
  case 'MONGO':
    console.log('Iniciando persistencia en MongoDB');
    connectDB();
    UserManager = UserMongoManager;
    ProductManager = ProductMongoManager;
    break;

  case 'MEMORY':
    console.log('Iniciando persistencia en MEMORIA');
    // UserManager = UserMemoryManager; // Cuando se implemente
    // ProductManager = ProductMemoryManager;
    break;

  default:
    console.warn(`Modo de persistencia no definido (${persistence}), usando fallback: MONGO`);
    connectDB();
    UserManager = UserMongoManager;
    ProductManager = ProductMongoManager;
    break;
}

export const users = new UserManager();
export const products = new ProductManager();
