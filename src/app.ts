import express from 'express';
import productController from './controller/productController';
import procurarPedido from './controller/orderController';
import loginController from './controller/login.controller';
import loginMiddleware from './middlewares/loginMiddleware';
import productMiddlewar from './middlewares/productMiddlewar';
import jwtMiddleware from './middlewares/jwtMiddlewar';
import UserMiddleware from './middlewares/userMiddlewar';

const app = express();

app.use(express.json());
app.post(
  '/products', 
  productMiddlewar.validateName,
  productMiddlewar.valitdatePrice, 
  productController.cadastrarProduto,
);
app.get('/products', productController.procurarProduto);
app.get('/orders', procurarPedido.procurarPedido);
app.post(
  '/orders', 
  jwtMiddleware,
  productMiddlewar.validateProductId,
  UserMiddleware,  
  procurarPedido.criarPedido,
);
app.post('/login', loginMiddleware, loginController.logincontroller);
export default app;
