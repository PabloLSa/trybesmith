import express from 'express';
import productController from './controller/productController';
import procurarPedido from './controller/orderController';
import loginController from './controller/login.controller';
import loginMiddleware from './middleware/loginMiddleware';

const app = express();

app.use(express.json());
app.post('/products', productController.cadastrarProduto);
app.get('/products', productController.procurarProduto);
app.get('/orders', procurarPedido.procurarPedido);
app.post('/login', loginMiddleware, loginController.logincontroller);
export default app;
