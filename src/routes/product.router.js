import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
import { applyPolicy } from '../utils/middlewares.js';

const router = Router();

// Todo el mundo puede ver los productos
router.get('/', applyPolicy(['PUBLIC']), productController.getProducts);

// Solo administradores o usuarios premium pueden crear un producto
// (Asumimos que tenés configurado un mecanismo como passport para que `req.user` exista. Si no, esto fallará en applyPolicy)
router.post('/', applyPolicy(['ADMIN', 'PREMIUM']), productController.createProduct);

export default router;
