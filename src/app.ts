import express from 'express';
import productController from './controller/productController';
import procurarPedido from './controller/orderController';

const app = express();

app.use(express.json());
app.post('/products', productController.cadastrarProduto);
app.get('/products', productController.procurarProduto);
app.get('/orders', procurarPedido.procurarPedido);
export default app;
