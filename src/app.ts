import express from 'express';
import productController from './controller/productController';

const app = express();

app.use(express.json());
app.post('/products', productController.cadastrarProduto);
app.get('/products', productController.procurarProduto);
export default app;
